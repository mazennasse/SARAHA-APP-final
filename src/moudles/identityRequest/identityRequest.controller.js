
import { Router } from "express";
import { sucessresponse } from "../../common/utlis/success.response.js";
import { validation } from "../../middleware/validation.middleware.js";
import { authentication } from "../../middleware/authentication.middleware.js";
import * as validators from "./identityRequest.validation.js";
import { createIdentityRequest, getIdentityRequests, getRequestedIdentity, respondToIdentityRequest } from "./identityRequest.service.js";

const router = Router();

router.post(
    "/:messageId",
    authentication(),
    validation(validators.createIdentityRequest),
    async (req, res, next) => {
        const data = await createIdentityRequest(
            req.validate.params,
            req.user
        );

        return sucessresponse({
            res,
            data,
            status: 201
        });
    }
);

router.get("/",authentication(),validation(validators.getRequests),async(req,res,next)=>{
    const data=await getIdentityRequests(req.validate.query,req.user)
    return sucessresponse({res,data})
})

router.patch(
    "/:requestId",
    authentication(),
    validation(validators.respondToRequest),
    async (req, res, next) => {
        const data = await respondToIdentityRequest(
            req.validate.params,
            req.validate.body,
            req.user
        );
        return sucessresponse({ res, data });
    }
);


router.get(
    "/:requestId/identity",
    authentication(),
    validation(validators.getRequestedIdentity),
    async (req, res, next) => {
        const data = await getRequestedIdentity(
            req.validate.params,
            req.user
        );

        return sucessresponse({ res, data });
    }
);

export default router;
