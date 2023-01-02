import joi from 'joi'

export const createArticleSchema = joi.object({
title: joi.string().messages({
'string.base': 'title must be a string',
'string.required': 'title is a required attribute',
}),

picture: joi.string().required().messages({
'string.base': 'Picture must be a string',
'string.required': 'Picture is a required attribute',
}),
description: joi.string().required().messages({
'string.base': 'description must be a string',
'string.required': 'description is a required attribute',
})
})

export const updateArticleSchema = joi.object({
title: joi.string().email().messages({
'string.base': 'Email must be a string',
'string.required': 'Email is a required attribute',
}),

picture: joi.string().required().messages({
'string.base': 'Password must be a string',
'string.required': 'Password is a required attribute',
}),
description: joi.string().required().messages({
'string.base': 'Password must be a string',
'string.required': 'Password is a required attribute',
})
})