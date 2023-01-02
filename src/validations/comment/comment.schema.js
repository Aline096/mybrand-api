import joi from 'joi'

export const commentSchema = joi.object({
commentor: joi.string().required().messages({
    'string.base': 'commentor must be a string',
    'string.required': 'commentor is a required attribute',
}),
comment: joi.string().required().messages({
    'string.base': 'comment must be a string',
    'string.required': 'comment is a required attribute',
}),

})