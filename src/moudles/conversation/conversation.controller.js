import { Router } from "express";
import { authentication } from "../../middleware/authentication.middleware.js";
import { validation } from "../../middleware/validation.middleware.js";
import * as validators from "./conversation.validation.js"
import { getMessages, sendMessage } from "./conversation.service.js";
import { sucessresponse } from "../../common/utlis/success.response.js";

const router=Router()

router.post("/:conversationId/messages",
    authentication(),
    validation(validators.sendMessage),
     async (req, res, next) => {
        const data = await sendMessage(
            req.validate.params,
            req.validate.body,
            req.user
        );
        return sucessresponse({ res, data, status: 201 });
    }
)

router.get("/:conversationId/messages",
    authentication(),
    validation(validators.getMessages),
     async (req, res, next) => {
        const data = await getMessages(req.validate.params,req.validate.query,req.user)
       
        return sucessresponse({ res, data });
    }
)

export default router




