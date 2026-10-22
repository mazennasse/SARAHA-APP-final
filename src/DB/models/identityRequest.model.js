import mongoose from "mongoose";
import { IdentityRequestStatusEnum } from "../../common/enum/identity-request-status.enum.js";

const identityRequestSchema = new mongoose.Schema({
    messageId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "message",
        required: true
    },
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    status: {
        type: String,
        enum: Object.values(IdentityRequestStatusEnum),
        default: IdentityRequestStatusEnum.PENDING,
        required: true
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

export const IdentityRequestModel =
    mongoose.models.identityRequest ||
    mongoose.model("identityRequest", identityRequestSchema);