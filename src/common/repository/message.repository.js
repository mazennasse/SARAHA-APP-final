
import { MessageModel } from "../../DB/models/message.model.js";
import * as base from "./db.repository.js";

// CREATE
export const create = async ({
    data = [],
    options = {}
}) => {
    return await base.create({
        model: MessageModel,
        data,
        options
    });
};

export const createOne = async ({
    data,
    options = {}
}) => {
    return await base.createOne({
        model: MessageModel,
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
        model: MessageModel,
        filter,
        options
    });
};

export const findOne = async ({
    filter = {},
    options = {}
}) => {
    return await base.findOne({
        model: MessageModel,
        filter,
        options
    });
};

export const findById = async ({
    id,
    options = {}
}) => {
    return await base.findById({
        model: MessageModel,
        id,
        options
    });
};

// INSERT MANY
export const insertMany = async ({
    data = [],
    options = {}
}) => {
    return await base.insertMany({
        model: MessageModel,
        data,
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
        model: MessageModel,
        filter,
        update,
        options
    });
};

export const updateMany = async ({
    filter = {},
    update = {},
    options = {}
}) => {
    return await base.updateMany({
        model: MessageModel,
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
        model: MessageModel,
        filter,
        update,
        options
    });
};

export const findByIdAndUpdate = async ({
    id,
    update = {},
    options = {}
}) => {
    return await base.findByIdAndUpdate({
        model: MessageModel,
        id,
        update,
        options
    });
};

export const findOneAndReplace = async ({
    filter = {},
    replacement = {},
    options = {}
}) => {
    return await base.findOneAndReplace({
        model: MessageModel,
        filter,
        replacement,
        options
    });
};

// DELETE
export const findByIdAndDelete = async ({
    id,
    options = {}
}) => {
    return await base.findByIdAndDelete({
        model: MessageModel,
        id,
        options
    });
};

export const findOneAndDelete = async ({
    filter = {},
    options = {}
}) => {
    return await base.findOneAndDelete({
        model: MessageModel,
        filter,
        options
    });
};

export const deleteOne = async ({
    filter = {},
    options = {}
}) => {
    return await base.deleteOne({
        model: MessageModel,
        filter,
        options
    });
};

export const deleteMany = async ({
    filter = {},
    options = {}
}) => {
    return await base.deleteMany({
        model: MessageModel,
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
        model: MessageModel,
        filter,
        options
    });
};

export const exists = async ({
    filter = {}
}) => {
    return await base.exists({
        model: MessageModel,
        filter
    });
};

// DISTINCT
export const distinct = async ({
    field,
    filter = {},
    options = {}
}) => {
    return await base.distinct({
        model: MessageModel,
        field,
        filter,
        options
    });
};

// AGGREGATE
export const aggregate = async ({
    pipeline = [],
    options = {}
}) => {
    return await base.aggregate({
        model: MessageModel,
        pipeline,
        options
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
        model: MessageModel,
        filter,
        options,
        page,
        size
    });
};
