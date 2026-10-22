
import { z } from "zod";
import { generalValidation } from "../../common/validation.js";
import { IdentityRequestStatusEnum } from "../../common/enum/identity-request-status.enum.js";

export const createIdentityRequest = (lang) => {
    return z.object({
        params: z.strictObject({
            messageId: generalValidation.id(lang)
        })
    });
};

export const getRequests = (lang) => {
    return z.object({
        query: z.strictObject({
            page: z.coerce.number().int().min(1).optional(),
            size: z.coerce.number().int().min(1).max(50).optional()
        })
    });
};


export const respondToRequest = (lang) => {
    return z.object({
        params: z.strictObject({
            requestId: generalValidation.id(lang)
        }),
        body: z.strictObject({
            status: z.enum([
                IdentityRequestStatusEnum.ACCEPTED,
                IdentityRequestStatusEnum.REJECTED
            ])
        })
    });
};

export const getRequestedIdentity = (lang) => {
    return z.object({
        params: z.strictObject({
            requestId: generalValidation.id(lang)
        })
    });
};