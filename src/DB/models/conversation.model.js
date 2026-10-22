
import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    messageId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "message",
        required: true,
        unique: true
    },
    identityRequestId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "identityRequest",
        required: true,
        unique: true
    }
}, {
    timestamps: true,
    strict: true,
    strictQuery: true,
    validateBeforeSave: true,
    autoIndex: true,
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    }
});

export const ConversationModel =
    mongoose.models.conversation ||
    mongoose.model("conversation", conversationSchema);
