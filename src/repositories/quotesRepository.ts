import { connection } from "../db/conn.js";

import { QueryResult } from "pg";
import { 
    QuoteEntity,
    CreatedQuote,
    ReturnedQuote,
    Quote,
    AuthorQuote
} from "../protocols/quote.js";

const createQuote = async(quote: CreatedQuote): Promise<QueryResult<QuoteEntity>> => {
    return connection.query(`
        INSERT INTO quotes(quote, author, author_name) VALUES ($1, $2, $3);
    `, [quote.quote, quote.author, quote.author_name]);
};

const searchQuotes = async(): Promise<QueryResult<ReturnedQuote>> => {
    return connection.query(`
        SELECT quote, author_name AS author FROM quotes;
    `);
};

const searchQuotesById = async(id: number): Promise<QueryResult<ReturnedQuote>> => {
    return connection.query(`
        SELECT quote, author_name AS author FROM quotes WHERE id = $1;
    `, [id]);
};

const searchQuotesByAuthor = async(author: string): Promise<QueryResult<ReturnedQuote>> => {
    return connection.query(`
        SELECT quote, author_name AS author FROM quotes WHERE author = $1;
    `, [author]);
};

const searchQuoteByAuthorAndId = async(author: string, id: number): Promise<QueryResult<ReturnedQuote>> => {
    return connection.query(`
        SELECT quote, author_name AS author FROM quotes WHERE author = $1 AND id = $2;
    `, [author, id]);
};

const editQuote = async(quote: Quote,  id: number): Promise<QueryResult<QuoteEntity>> => {
    return connection.query(`
        UPDATE quotes
            SET
                quote = $1
            WHERE
                id = $2
    `, [quote.quote, id]);
};

const editQuoteAuthor = async(author: AuthorQuote,  id: number): Promise<QueryResult<QuoteEntity>> => {
    return connection.query(`
        UPDATE quotes
            SET
                author = $1,
                author_name = $2
            WHERE
                id = $3
    `, [author.author, author.author_name, id]);
};

const editFullQuote = async(quote: CreatedQuote, id: number): Promise<QueryResult<QuoteEntity>> => {
    return connection.query(`
        UPDATE quotes
            SET
                quote = $1,
                author = $2,
                author_name = $3
            WHERE
                id = $4
    `, [quote.quote, quote.author, quote.author_name, id])
}

const deleteQuote = async(id: number): Promise<QueryResult<QuoteEntity>> => {
    return connection.query(`
        DELETE FROM quotes
        WHERE id = $1
    `, [id])
};


export {
    createQuote,
    searchQuotes,
    searchQuotesById,
    searchQuotesByAuthor,
    searchQuoteByAuthorAndId,
    editQuote,
    editQuoteAuthor,
    editFullQuote,
    deleteQuote
};