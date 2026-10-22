import { TokenType } from "../common/enum/security.enum.js"
import { forbiddenException, unauthorizedException } from "../common/execption/index.js"
import { authBasic, decodeToken } from "../common/security/token.security.js"
export const bearerauth=async({req,tokenType=TokenType.ACCESS})=>{
        const[key,token]=req.headers["authorization"].split(" ") ||[]
        const{account,payload}=await decodeToken({token,tokenType})
        req.user=account
        req.payload=payload
    
}
    




export const authentication=(tokenType=TokenType.ACCESS)=>{
    return async(req , res, next)=>{
    const {authorization}=req.headers   //take token from headers
    if(!authorization){
        throw unauthorizedException("unazorithezed")
    }
    const[key,credintal]=authorization.split(" ") ||[]
    switch (key) {
        case "Basic":
            const[email,password]=Buffer.from(credintal,"base64").toString()?.split(":")
            req.user=await authBasic({email,password})
            
            break;
        case "Bearer":   //use method token bearer
            await bearerauth({req,tokenType})
            break;  
    
       default:
    return next(new Error("invalid authentication schema", { cause: { status: 400 } }))
}
    
    next()

}
}

export const authorization=(accessRole)=>{
  return async(req,res,next)=>{
      if(req.user.role<accessRole){
        throw forbiddenException("there is not allowed for you")
    }
    next()
  }
}