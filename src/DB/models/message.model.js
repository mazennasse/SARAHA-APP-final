import mongoose from "mongoose";
import { GenderEnum, Role } from "../../common/enum/index.js";
import { ProviderEnum } from "../../common/enum/provider.enum.js";

const MessageSchema=new mongoose.Schema({
    content:{
        type:String,
        minLength:2,
        maxLength:50000,
        required:function(){
            return this.attachments?.length>0 ? false:true 
        }
    
    },
    attachments:[String],
    senderId:{type:mongoose.Types.ObjectId,ref:"User"},
    receiverId:{type:mongoose.Types.ObjectId,ref:"User",required:true},
       
   

   

},{
    timestamps:true,
    strict:true,
    strictQuery:true,
    validateBeforeSave:true,
    autoIndex:true,
    toJSON:{
        virtuals:true
    },
    toObject:{
        virtuals:true
    },
    
    
})


export const MessageModel=mongoose.model.message || mongoose.model("message",MessageSchema)