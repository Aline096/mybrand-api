import joi from 'joi'

export const messageSchema = joi.object({
name: joi.string().required().messages({
'string.base': 'Password must be a string',
'string.required': 'Password is a required attribute',
}),
email: joi.string().required().email().messages({
'string.base': 'Email must be a string',
'string.required': 'Email is a required attribute',
'string.email': 'Email must be a valid email string'
}),

message: joi.string().required().messages({
'string.base': 'Password must be a string',
'string.required': 'Password is a required attribute',
})
})