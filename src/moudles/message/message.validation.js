import mongoose from "mongoose"
import {size, z} from "zod"
import { generalValidation } from "../../common/validation.js"

export const createMessage=(lang)=>{
    return z.object({
        body:z.strictObject({
            content:z.string().min(2).max(50000).optional(), 
            receiverId:generalValidation.id(lang)

        }),
        files:z.array(generalValidation.files(lang)).max(3).optional()
        
        
    }).superRefine((data,ctx)=>{
        if(!data.body.content && !data.files?.length ){
            ctx.addIssue({
                code:"custom",
                path:["content"],
                message:"missing message contnet"
            })
        }
    })

}

export const allmessages=(lang)=>{
    return z.object({
        query:z.strictObject({
            type:z.enum(["0","1","2"]).default("0"),
            page:z.coerce.number().default(1),
            size:z.coerce.number().default(5)

        }),
        
        
        
    })

}

export const deleteMessage=(lang)=>{
    return z.object({
        params:z.strictObject({
            messageId:generalValidation.id(lang)
            

        }),
        
        
        
    })

}

export const messageById=(lang)=>{
    return z.object({
        params:z.strictObject({
            messageId:generalValidation.id(lang)
            

        }),
        
        
        
    })

}
