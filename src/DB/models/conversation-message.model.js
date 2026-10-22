
import mongoose from "mongoose";

const conversationMessageSchema = new mongoose.Schema({
    conversationId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "conversation",
        required: true
    },
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    content: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    strict: true,
    strictQuery: true,
    validateBeforeSave: true,
    autoIndex: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

export const ConversationMessageModel =
    mongoose.models.conversationMessage ||
    mongoose.model("conversationMessage", conversationMessageSchema);
