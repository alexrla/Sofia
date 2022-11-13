import Joi from "joi";

const quotesSchema = Joi.object({
    quote: Joi.string().required(),
    author: Joi.string().required(),
    author_name: Joi.string().required(),
});

const quoteSchema = Joi.object({
    quote: Joi.string().required(),
});

const quoteAuthorSchema = Joi.object({
    author: Joi.string().required(),
    author_name: Joi.string().required()
});

export { quotesSchema, quoteSchema, quoteAuthorSchema };