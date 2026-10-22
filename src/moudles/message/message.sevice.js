
import { notFoundException } from "../../common/execption/index.js";
import * as messageRepo from "../../common/repository/message.repository.js";
import * as userRepo from "../../common/repository/user.repository.js";

export const createMessage = async (
    { content, receiverId },
    files = [],
    user = undefined
) => {
    const checkReceiver = await userRepo.findById({
        
        id: receiverId
    });

    if (!checkReceiver) {
        throw notFoundException("this user is not found");
    }

    const message = await messageRepo.createOne({
        data: {
            content,
            receiverId,
            attachments: files.map((file) => file.FinalPath),
            ...(user ? { senderId: user._id } : {})
        }
    });
    const {senderId,...returndeMessage}=message.toObject()


    return returndeMessage;
};

export const getAllMessages = async ({ type, page, size }, user) => {
    let filter = {};
    let options={
        sort: {
                createdAt: -1
            }

    }

    if (type == "0") {
        filter = { receiverId: user._id };
        options.select="-senderId"

    } else if (type == "1") {
        filter = { senderId: user._id };
    } else {
        filter = {
            $or: [
                { senderId: user._id },
                { receiverId: user._id }
            ]
        }
        options.select="-senderId"
    }

    const data = await messageRepo.paginate({
        filter,
        options,
        page,
        size
    });

    return data;
};

export const deleteMessage = async ({ messageId }, user) => {
    const deletedMessage = await messageRepo.deleteOne({
        filter: {
            _id: messageId,
            receiverId: user._id
        }
    });

    if (!deletedMessage.deletedCount) {
        throw notFoundException("there is no found message");
    }

    return deletedMessage;
};

export const getMessageById = async ({ messageId }, user) => {
    const message = await messageRepo.findOne({
        filter: {
            _id: messageId,
            receiverId: user._id
        },
        options:{
            select:"-senderId"
        }
    });

    if (!message) {
        throw notFoundException("there is no message found");
    }

    return message;
};
