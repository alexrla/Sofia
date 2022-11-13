export type QuoteEntity = {
    id?: number,
    quote: string,
    author: string,
    author_name: string,
};

export type CreatedQuote = Omit<QuoteEntity, "id">;
export type ReturnedQuote = Omit<QuoteEntity, "id" | "author">;
export type Quote = Omit<QuoteEntity, "id" | "author" | "author_name">;
export type AuthorQuote = Omit<QuoteEntity, "id" | "quote">;