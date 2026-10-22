import { Router } from "express";
import { confirmEmail, login, resendConfirmEmail, signup,signupWithGmail,confirmLoginTwoStepVerification, forgotPassword,  ResetPassword, verifiyForgetPasswordCode } from "./authentication.service.js";
import { sucessresponse } from "../../common/utlis/success.response.js";

import * as validators from "./authentication.validation.js"
import { validation } from "../../middleware/validation.middleware.js";
import { authentication } from "../../middleware/authentication.middleware.js";
import { generateLimiter } from "../../common/utlis/limiter.js";
const router=Router()


router.post("/signup",validation(validators.signup),async (req , res ,next)=>{
    const data=await signup(req.validate.body)
    return sucessresponse({res,data,status:201})
})

router.patch("/confirm-email",validation(validators.confirmEmail),async (req , res ,next)=>{
    const data=await confirmEmail(req.body)
    return sucessresponse({res,data,status:200})
})

router.patch("/resend-confirm-email",validation(validators.resendconfirmEmail),async (req , res ,next)=>{
    const data=await resendConfirmEmail(req.body)
    return sucessresponse({res,data,status:200})
})

const loginLimiter=generateLimiter({limit:5,ttl:5,skipSuccessfulRequests:true})
router.post("/login",loginLimiter,validation(validators.login),async(req,res,next)=>{
    const data=await login(req.validate.body,`${req.protocol}://${req.host}`)
    return sucessresponse({res,data})
})

router.post("/signup-with-gmail",async (req , res ,next)=>{
    const {tokens,status}=await signupWithGmail(req.body,`${req.protocol}://${req.host}`)
    return sucessresponse({res,data:tokens,status})
})

router.post(
  "/login/2-step-verification",
  validation(validators.confirmLoginTwoStepVerification),
  async (req, res, next) => {

    const data = await confirmLoginTwoStepVerification(
      req.validate.body,
      `${req.protocol}://${req.host}`
    );

    return sucessresponse({ res, data });
  }
);

router.post("/forgot-password",validation(validators.forgotPassword),async(req,res,next)=>{
    const data=await forgotPassword(req.validate.body)
    return sucessresponse({res,data,status:201})
})

router.post("/verifiy-forgot-password",validation(validators.confirmEmail),async(req,res,next)=>{
    const data=await verifiyForgetPasswordCode(req.validate.body)
    return sucessresponse({res,data,status:200})
})


router.patch("/reset-password",validation(validators.resetPassword),async(req,res,next)=>{
    const data=await ResetPassword(req.validate.body)
    return sucessresponse({res,data})
})






export default router 