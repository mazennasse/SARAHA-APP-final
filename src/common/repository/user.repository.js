
import { UserModel } from "../../DB/models/user.model.js";
import * as base from "./db.repository.js";

export const create = async ({ data = [], options = {} }) =>
    await base.create({ model: UserModel, data, options });

export const createOne = async ({ data, options = {} }) =>
    await base.createOne({ model: UserModel, data, options });

export const find = async ({ filter = {}, options = {} }) =>
    await base.find({ model: UserModel, filter, options });

export const findOne = async ({ filter = {}, options = {} }) =>
    await base.findOne({ model: UserModel, filter, options });

export const findById = async ({ id, options = {} }) =>
    await base.findById({ model: UserModel, id, options });

export const insertMany = async ({ data = [], options = {} }) =>
    await base.insertMany({ model: UserModel, data, options });

export const updateOne = async ({ filter = {}, update = {}, options = {} }) =>
    await base.updateOne({ model: UserModel, filter, update, options });

export const updateMany = async ({ filter = {}, update = {}, options = {} }) =>
    await base.updateMany({ model: UserModel, filter, update, options });

export const findOneAndUpdate = async ({ filter = {}, update = {}, options = {} }) =>
    await base.findOneAndUpdate({ model: UserModel, filter, update, options });

export const findByIdAndUpdate = async ({ id, update = {}, options = {} }) =>
    await base.findByIdAndUpdate({ model: UserModel, id, update, options });

export const findOneAndReplace = async ({ filter = {}, replacement = {}, options = {} }) =>
    await base.findOneAndReplace({ model: UserModel, filter, replacement, options });

export const findByIdAndDelete = async ({ id, options = {} }) =>
    await base.findByIdAndDelete({ model: UserModel, id, options });

export const findOneAndDelete = async ({ filter = {}, options = {} }) =>
    await base.findOneAndDelete({ model: UserModel, filter, options });

export const deleteOne = async ({ filter = {}, options = {} }) =>
    await base.deleteOne({ model: UserModel, filter, options });

export const deleteMany = async ({ filter = {}, options = {} }) =>
    await base.deleteMany({ model: UserModel, filter, options });

export const countDocuments = async ({ filter = {}, options = {} }) =>
    await base.countDocuments({ model: UserModel, filter, options });

export const exists = async ({ filter = {} }) =>
    await base.exists({ model: UserModel, filter });

export const distinct = async ({ field, filter = {}, options = {} }) =>
    await base.distinct({ model: UserModel, field, filter, options });

export const aggregate = async ({ pipeline = [], options = {} }) =>
    await base.aggregate({ model: UserModel, pipeline, options });

export const paginate = async ({ filter = {}, options = {}, page = 1, size = 5 }) =>
    await base.paginate({ model: UserModel, filter, options, page, size });
