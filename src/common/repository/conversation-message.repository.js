
import { ConversationMessageModel } from "../../DB/models/conversation-message.model.js";
import * as base from "./db.repository.js";

// CREATE
export const create = async ({
    data = [],
    options = {}
}) => {
    return await base.create({
        model: ConversationMessageModel,
        data,
        options
    });
};

export const createOne = async ({
    data,
    options = {}
}) => {
    return await base.createOne({
        model: ConversationMessageModel,
        data,
        options
    });
};

// READ
export const find = async ({
    filter = {},
    options = {}
}) => {
    return await base.find({
        model: ConversationMessageModel,
        filter,
        options
    });
};

export const findOne = async ({
    filter = {},
    options = {}
}) => {
    return await base.findOne({
        model: ConversationMessageModel,
        filter,
        options
    });
};

export const findById = async ({
    id,
    options = {}
}) => {
    return await base.findById({
        model: ConversationMessageModel,
        id,
        options
    });
};

// UPDATE
export const updateOne = async ({
    filter = {},
    update = {},
    options = {}
}) => {
    return await base.updateOne({
        model: ConversationMessageModel,
        filter,
        update,
        options
    });
};

export const findOneAndUpdate = async ({
    filter = {},
    update = {},
    options = {}
}) => {
    return await base.findOneAndUpdate({
        model: ConversationMessageModel,
        filter,
        update,
        options
    });
};

// DELETE
export const findOneAndDelete = async ({
    filter = {},
    options = {}
}) => {
    return await base.findOneAndDelete({
        model: ConversationMessageModel,
        filter,
        options
    });
};

export const findByIdAndDelete = async ({
    id,
    options = {}
}) => {
    return await base.findByIdAndDelete({
        model: ConversationMessageModel,
        id,
        options
    });
};

// COUNT & CHECK
export const countDocuments = async ({
    filter = {},
    options = {}
}) => {
    return await base.countDocuments({
        model: ConversationMessageModel,
        filter,
        options
    });
};

export const exists = async ({
    filter = {}
}) => {
    return await base.exists({
        model: ConversationMessageModel,
        filter
    });
};

// PAGINATION
export const paginate = async ({
    filter = {},
    options = {},
    page = 1,
    size = 5
}) => {
    return await base.paginate({
        model: ConversationMessageModel,
        filter,
        options,
        page,
        size
    });
};
