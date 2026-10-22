
import * as messageRepo from "../../common/repository/message.repository.js";
import * as userRepo from "../../common/repository/user.repository.js";
import * as converstionReop from "../../common/repository/conversation.repository.js"
import * as converstionMessageReop from "../../common/repository/conversation-message.repository.js"

import { notFoundException } from "../../common/execption/error.execption.js"

export const sendMessage=async({conversationId},{content},user)=>{
    const conversation=await converstionReop.findOne({
        filter:{
            _id:conversationId,
            $or: [
            { senderId: user._id },
            { receiverId: user._id }
        ],
        }
    })
    if (!conversation) {
    throw notFoundException("conversation not found");
}

const message=await converstionMessageReop.createOne({
    data:{
        conversationId:conversation._id,
        senderId:user._id,
        content
    }
})
return message

}


export const getMessages = async ({ conversationId }, { page, size }, user) => {
    const conversation = await converstionReop.findOne({
        filter: {
            _id: conversationId,
            $or: [
                { senderId: user._id },
                { receiverId: user._id }
            ]
        }
    });

    if (!conversation) {
        throw notFoundException("conversation not found");
    }

    const allMessages = await converstionMessageReop.paginate({
        filter: {
            conversationId: conversation._id
        },
        options: {
            sort: { createdAt: -1 }
        },
        page: page ?? 1,
        size: size ?? 5
    });

    return allMessages;
};
