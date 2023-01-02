import joi from 'joi'

export const messageSchema = joi.object({
name: joi.string().required().messages({
'string.base': 'name must be a string',
'string.required': 'name is a required attribute',
}),
email: joi.string().required().email().messages({
'string.base': 'Email must be a string',
'string.required': 'Email is a required attribute',
'string.email': 'Email must be a valid email string'
}),

message: joi.string().required().messages({
'string.base': 'message must be a string',
'string.required': 'message is a required attribute',
})
})