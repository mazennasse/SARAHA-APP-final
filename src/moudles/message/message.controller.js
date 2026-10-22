import { Router } from "express";
import { sucessresponse } from "../../common/utlis/success.response.js";
import { createMessage, deleteMessage, getAllMessages, getMessageById } from "./message.sevice.js";
import { uploadMiddleware } from "../../middleware/multer.middleware.js";
import { fileValidtion, localFileUpload } from "../../common/utlis/index.js";
import { validation } from "../../middleware/validation.middleware.js";
import * as validatiors from "./message.validation.js"
import { decodeToken } from "../../common/security/token.security.js";
import { authentication, bearerauth } from "../../middleware/authentication.middleware.js";
const messageFolderName="message"
const router=Router()

router.post("/",
    async(req,res,next)=>{
        if(req.headers["authorization"]){
            await bearerauth({req})
        }
        next()
        
    },



    uploadMiddleware({
        multermiddleware:localFileUpload().array("attachments",3),
        validation:fileValidtion.image,
        customPath:messageFolderName,
        isrequired:false

}),
validation(validatiors.createMessage),
    async(req , res , next)=>{
    const data=await createMessage(req.body,req.files,req.user)
    return  sucessresponse({res,data,status:201})
})

router.get("/",
   authentication(),
   validation(validatiors.allmessages),
    async(req , res , next)=>{
    const data=await getAllMessages(req.validate.query,req.user)
    return  sucessresponse({res,data})
})

router.delete("/:messageId",
   authentication(),
   validation(validatiors.deleteMessage),
    async(req , res , next)=>{
    const data=await deleteMessage(req.validate.params,req.user)
    return  sucessresponse({res,data})
})

router.get("/:messageId",
   authentication(),
   validation(validatiors.messageById),
    async(req , res , next)=>{
    const data=await getMessageById(req.validate.params,req.user)
    return  sucessresponse({res,data})
})
export default router