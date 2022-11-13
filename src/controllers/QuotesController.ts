import { Request, Response } from "express";

import {
    createQuote,
    searchQuotes,
    searchQuotesById,
    searchQuotesByAuthor,
    searchQuoteByAuthorAndId,
    editQuote,
    editQuoteAuthor,
    editFullQuote,
    deleteQuote
} from "../repositories/quotesRepository.js"
import {
    CreatedQuote,
    Quote,
    AuthorQuote
} from "../protocols/quote.js";
import { 
    quotesSchema,
    quoteSchema,
    quoteAuthorSchema
} from "../schemas/quoteSchema.js";

const create = async(req: Request, res: Response) => {

    const newQuote = req.body as CreatedQuote;

    const { error } = quotesSchema.validate(newQuote);

    if(error) return res.status(400).json({
        message: error.message
    });

    await createQuote(newQuote);

    return res.status(200).json({
        message: "QUOTE CREATED SUCCESSFULLY!"
    });
}

const search = async(req: Request, res: Response) => {

    const quotes = await searchQuotes();

    return res.status(200).json({ quotes: quotes.rows });
}

const searchById = async(req: Request, res: Response) => {

    const id: number = Number(req.params.id);

    const quote = await searchQuotesById(id);

    return res.status(200).json({ quote: quote.rows[0] });
}

const searchByAuthor = async(req: Request, res: Response) => {

    const author: string = req.params.author;

    const quotes = await searchQuotesByAuthor(author.toLowerCase());
    
    return res.status(200).json({ quotes: quotes.rows });
}

const searchByAuthorAndId = async(req: Request, res: Response) => {
    
    const author: string = req.params.author;
    const id: number = Number(req.params.id);

    const quote = await searchQuoteByAuthorAndId(author.toLowerCase(), id);

    return res.status(200).json({ quote: quote.rows });
}

const editQuoteById = async(req: Request, res: Response) => {

    const id: number = Number(req.params.id);

    const quote = req.body as Quote;

    const { error } = quoteSchema.validate(quote);

    if(error) return res.status(400).json({
        message: error.message
    });

    await editQuote(quote, id);

    return res.status(200).json({
        message: "QUOTE EDITED SUCCESSFULLY!"
    });
}

const editAuthorById = async(req: Request, res: Response) => {
    
    const id: number = Number(req.params.id);

    const author = req.body as AuthorQuote;

    const { error } = quoteAuthorSchema.validate(author);

    if(error) return res.status(400).json({
        message: error.message
    });

    await editQuoteAuthor(author, id);

    return res.status(200).json({
        message: "QUOTE EDITED SUCCESSFULLY!"
    });
}

const editFullQuoteById = async(req: Request, res: Response) => {

    const id: number = Number(req.params.id);

    const quote = req.body as CreatedQuote;

    const { error } = quotesSchema.validate(quote);

    if(error) return res.status(400).json({
        message: error.message
    });

    await editFullQuote(quote, id);

    return res.status(200).json({
        message: "QUOTE EDITED SUCCESSFULLY!"
    });
}

const deleteQuoteById = async(req: Request, res: Response) => {

    const id: number = Number(req.params.id);

    await deleteQuote(id);

    return res.status(200).json({
        message: "QUOTE SUCCESSFULLY DELETED!"
    });
}

export {
    create,
    search,
    searchById,
    searchByAuthor,
    searchByAuthorAndId,
    editQuoteById,
    editAuthorById,
    editFullQuoteById,
    deleteQuoteById
};