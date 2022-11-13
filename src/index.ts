import express from "express";

import {
    create,
    search,
    searchById,
    searchByAuthor,
    searchByAuthorAndId,
    editQuoteById,
    editAuthorById,
    editFullQuoteById,
    deleteQuoteById
} from "./controllers/QuotesController.js";

const app = express();
app.use(express.json());

app.post("/create-quote", create);
app.get("/search-quotes", search);
app.get("/search-quote/:id", searchById);
app.get("/search-quotes/:author", searchByAuthor);
app.get("/search-quote/:author/:id", searchByAuthorAndId);
app.put("/edit-quote/:id", editQuoteById);
app.put("/edit-author/:id", editAuthorById);
app.put("/edit-fullquote/:id", editFullQuoteById);
app.delete("/delete-quote/:id", deleteQuoteById);

app.listen(4000, () => console.log("App funcionando..."));