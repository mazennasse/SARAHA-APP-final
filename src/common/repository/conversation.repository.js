
import { ConversationModel } from "../../DB/models/conversation.model.js";
import * as base from "./db.repository.js";

// CREATE
export const create = async ({
    data = [],
    options = {}
}) => {
    return await base.create({
        model: ConversationModel,
        data,
        options
    });
};

export const createOne = async ({
    data,
    options = {}
}) => {
    return await base.createOne({
        model: ConversationModel,
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
        model: ConversationModel,
        filter,
        options
    });
};

export const findOne = async ({
    filter = {},
    options = {}
}) => {
    return await base.findOne({
        model: ConversationModel,
        filter,
        options
    });
};

export const findById = async ({
    id,
    options = {}
}) => {
    return await base.findById({
        model: ConversationModel,
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
        model: ConversationModel,
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
        model: ConversationModel,
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
        model: ConversationModel,
        filter,
        options
    });
};

// COUNT & CHECK
export const countDocuments = async ({
    filter = {},
    options = {}
}) => {
    return await base.countDocuments({
        model: ConversationModel,
        filter,
        options
    });
};

export const exists = async ({
    filter = {}
}) => {
    return await base.exists({
        model: ConversationModel,
        filter
    });
};


