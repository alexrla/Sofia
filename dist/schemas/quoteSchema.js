import Joi from "joi";
var quotesSchema = Joi.object({
    quote: Joi.string().required(),
    author: Joi.string().required(),
    author_name: Joi.string().required()
});
var quoteSchema = Joi.object({
    quote: Joi.string().required()
});
var quoteAuthorSchema = Joi.object({
    author: Joi.string().required(),
    author_name: Joi.string().required()
});
export { quotesSchema, quoteSchema, quoteAuthorSchema };
