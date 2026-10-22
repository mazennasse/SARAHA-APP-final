import { z } from "zod";
import { generalValidation } from "../../common/validation.js";

export const sendMessage = (lang) => {
    return z.object({
        params: z.strictObject({
            conversationId: generalValidation.id(lang)
        }),
        body: z.strictObject({
            content: z.string().trim().min(1).max(50000)
        })
    });
};

export const getMessages = (lang) => {
    return z.object({
        params: z.strictObject({
            conversationId: generalValidation.id(lang)
        }),
         query: z.strictObject({
            page: z.coerce.number().int().min(1).optional(),
            size: z.coerce.number().int().min(1).max(50).optional()
        })
        
    });
};