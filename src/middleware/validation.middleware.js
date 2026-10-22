import {file, number, z} from "zod"
import { BadExecption } from "../common/execption/index.js"
import { LanguageEnum } from "../common/enum/language.enum.js"
export const validation=(schema)=>{
    return async(req , res , next)=>{
        const lang=Number(req.headers["accept-language"]?? LanguageEnum.EN)
        const validatorResult=schema(lang).safeParse({
            body:req.body,
            params:req.params,
            query:req.query,
            files:req.files,
            files:req.files,
            headers:req.headers
          
        })
        if(!validatorResult.success){
            throw BadExecption("validation error",validatorResult.error.issues)
        }
        req.validate=validatorResult.data
        next()
    }
}