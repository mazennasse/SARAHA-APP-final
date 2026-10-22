import { BadExecption, conflictException, notFoundException } from "../../common/execption/index.js";
import * as messageRepo from "../../common/repository/message.repository.js";
import * as identityRequestRepo from "../../common/repository/identityRequest.repository.js";
import { IdentityRequestStatusEnum } from "../../common/enum/identity-request-status.enum.js";
import * as userRepo from "../../common/repository/user.repository.js"
import { decrypt } from "../../common/security/encryption.js";
import * as conversationRepo from "../../common/repository/conversation.repository.js"


export const createIdentityRequest = async ({ messageId }, user) => {
    const message = await messageRepo.findOne({
        filter: {
            _id: messageId,
            receiverId: user._id
        }
    });

    if (!message) {
        throw notFoundException("message not found");
    }

    if (!message.senderId) {
        throw BadExecption("sender is unknown, this message was sent anonymously by a guest");
    }

    const existing = await identityRequestRepo.findOne({
        filter: { messageId: message._id, receiverId: user._id }
    });

    if (existing) {
        throw conflictException("you already requested the sender identity for this message");
    }

    const identityRequest = await identityRequestRepo.createOne({
        data: {
            messageId: message._id,
            receiverId: user._id,
            senderId: message.senderId
        }
    });

    const { senderId, ...result } = identityRequest.toObject();
    return result;
};


export const getIdentityRequests=async({page=1,size=5},user)=>{
    const data = await identityRequestRepo.paginate({
        filter:{senderId:user._id},
        options:{
            sort:{
                createdAt:-1
            }
        },
        page,
        size
    })
    return data

}


export const respondToIdentityRequest=async({requestId},{status},user)=>{
    const request=await identityRequestRepo.findOne({
        filter:{
            _id:requestId,
            senderId:user._id
        }
    })
    if(!request){
        throw notFoundException("there is no this request")
    }
    if(request.status!=IdentityRequestStatusEnum.PENDING){
        throw conflictException(`this request is already ${request.status}`)
    }
    request.status=status
    await request.save();
    if(request.status==IdentityRequestStatusEnum.ACCEPTED){
        const conversation=await conversationRepo.createOne({
            data:{
                senderId:request.senderId,
                receiverId:request.receiverId,
                messageId:request.messageId,
                identityRequestId:request._id
            }
        })
         return { message: "request accepted", conversation }
} else {
    return { message: "request rejected" }
}

}

export const getRequestedIdentity = async ({ requestId }, user) => {
    const request = await identityRequestRepo.findOne({
        filter: {
            _id: requestId,
            receiverId: user._id 
        }
    });

    if (!request) {
        throw notFoundException("identity request not found");
    }

    
    if (request.status === IdentityRequestStatusEnum.PENDING) {
        throw conflictException("identity request is still pending");
    }

    if (request.status === IdentityRequestStatusEnum.REJECTED) {
        throw conflictException("identity request was rejected");
    }

    if (request.status !== IdentityRequestStatusEnum.ACCEPTED) {
        throw conflictException("identity request is not accepted");
    }

    if (!request.senderId) {
        throw notFoundException("sender identity is unavailable");
    }

    const sender = await userRepo.findById({
        id: request.senderId
    });

    if (!sender) {
        throw notFoundException("sender account not found");
    }

    return {
        id: sender._id,
        username: sender.username,
        image: sender.image,
        email: sender.email,
        
    };
};
