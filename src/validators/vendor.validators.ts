import { RequestHandler } from "express";
import Joi from "joi";

export const validateNew: RequestHandler =async (req, res, next) => {
    try {
        console.log(req.body, req)
        const newVendorSchema = Joi.object({
            companyName: Joi.string().required(),
            gst: Joi.string().required(),
            address: Joi.string().required(),
            isInternational: Joi.boolean().required(),
            beneficiary: Joi.string().required(),
            accountNumber: Joi.string().required(),
            ifsc: Joi.string().required(),
            bankName: Joi.string().required(),
            branch: Joi.string().required(),
            coi: Joi.string(),
            msme: Joi.string(),
            tradeMark: Joi.string(),
            gstAttachment: Joi.any().required(),
            bankAttachment: Joi.any().required(),
            coiAttachment: Joi.any(),
            msmeAttachment: Joi.any(),
            tradeAttachment: Joi.any(),
            agreementAttachment: Joi.any().required(),
            otherFields: Joi.array()
        })
        const value = await newVendorSchema.validateAsync(req.body);
        next();

    } catch (error: any) {
        return res.status(504).json({
            success: false,
            message: error.message,
            data: [],
        });
    }
}

// export const validateSignUp: RequestHandler = async (req, res, next) => {
//     try {
//         const signUpSchema = Joi.object({
//             email: Joi.string()
//                 .email()
//                 .required(),

//             password: Joi.string()
//                 .min(8)
//                 .max(20)
//                 .required()
//         })

//         const value = await signUpSchema.validateAsync(req.body);
//         const { email } = value;
//         const existingUser = await User.findOne({ where: { email } });
//         if (existingUser) {
//             return res.status(400).json({
//                 success: false,
//                 message: "User with this email already exists!",
//                 data: [],
//             });
//         }
//         next();

//     } catch (error: any) {
//         return res.status(504).json({
//             success: false,
//             message: error.message,
//             data: [],
//         });
//     }
// }