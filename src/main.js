import crypto from "node:crypto"
import dns from "dns";
import cors from "cors"


dns.setServers(["8.8.8.8", "1.1.1.1"]);
import express from "express"
import { globalerror } from "./middleware/erroe.message.js"
import { authcontroller,usercontroller,messagecontroller ,identityRequest,converstioncontroller} from "./moudles/index.js"
import { ORIGINS, PORT } from "./config.js"
import { startserver } from "./DB/database.connection.js"
import { sendemail } from "./common/utlis/email/send.email.js";
import { resolve } from "node:path";
import helmet from "helmet"
import { sucessresponse } from "./common/utlis/success.response.js";
import { client } from "./DB/redis.connection.js";
import { generateLimiter } from "./common/utlis/limiter.js";
const app=express()
await startserver(app,PORT)


var corsOptions = {
  origin: function (origin, callback) {
   if (!origin || !ORIGINS.includes(origin)) {
    return callback(
        new Error("unauthorized origin", {
            cause: { status: 401 }
        })
    );
}

callback(null, true);
  }
}


app.set("trust proxy",true)
const limiter=generateLimiter({})
app.use("/assets",express.static("./assets"))
app.use(helmet(),cors(),limiter,express.json())
app.all("/",(req,res)=>{
    res.status(200).send({message:"welcome"})
})


app.use("/auth",authcontroller)
app.use("/user",usercontroller)
app.use("/message",messagecontroller)
app.use("/identity-request", identityRequest);
app.use("/conversation", converstioncontroller);







app.all("{/*dummy}",(req,res)=>{
    res.status(404).send({message:"invalid route"})
})
app.use(globalerror)

