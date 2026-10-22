
import { IdentityRequestModel } from "../../DB/models/identityRequest.model.js"
import * as base from "./db.repository.js";

// CREATE
export const create = async ({
    data = [],
    options = {}
}) => {
    return await base.create({
        model: IdentityRequestModel,
        data,
        options
    });
};

export const createOne = async ({
    data,
    options = {}
}) => {
    return await base.createOne({
        model: IdentityRequestModel,
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
        model: IdentityRequestModel,
        filter,
        options
    });
};

export const findOne = async ({
    filter = {},
    options = {}
}) => {
    return await base.findOne({
        model: IdentityRequestModel,
        filter,
        options
    });
};

export const findById = async ({
    id,
    options = {}
}) => {
    return await base.findById({
        model: IdentityRequestModel,
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
        model: IdentityRequestModel,
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
        model: IdentityRequestModel,
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
        model: IdentityRequestModel,
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
        model: IdentityRequestModel,
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
        model: IdentityRequestModel,
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
        model: IdentityRequestModel,
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
        model: IdentityRequestModel,
        id,
        options
    });
};

export const findOneAndDelete = async ({
    filter = {},
    options = {}
}) => {
    return await base.findOneAndDelete({
        model: IdentityRequestModel,
        filter,
        options
    });
};

export const deleteOne = async ({
    filter = {},
    options = {}
}) => {
    return await base.deleteOne({
        model: IdentityRequestModel,
        filter,
        options
    });
};

export const deleteMany = async ({
    filter = {},
    options = {}
}) => {
    return await base.deleteMany({
        model: IdentityRequestModel,
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
        model: IdentityRequestModel,
        filter,
        options
    });
};

export const exists = async ({
    filter = {}
}) => {
    return await base.exists({
        model: IdentityRequestModel,
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
        model: IdentityRequestModel,
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
        model: IdentityRequestModel,
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
        model: IdentityRequestModel,
        filter,
        options,
        page,
        size
    });
};
