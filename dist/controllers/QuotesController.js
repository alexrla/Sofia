var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { createQuote, searchQuotes, searchQuotesById, searchQuotesByAuthor, searchQuoteByAuthorAndId, editQuote, editQuoteAuthor, editFullQuote, deleteQuote } from "../repositories/quotesRepository.js";
import { quotesSchema, quoteSchema, quoteAuthorSchema } from "../schemas/quoteSchema.js";
var create = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var newQuote, error;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                newQuote = req.body;
                error = quotesSchema.validate(newQuote).error;
                if (error)
                    return [2 /*return*/, res.status(400).json({
                            message: error.message
                        })];
                return [4 /*yield*/, createQuote(newQuote)];
            case 1:
                _a.sent();
                return [2 /*return*/, res.status(200).json({
                        message: "QUOTE CREATED SUCCESSFULLY!"
                    })];
        }
    });
}); };
var search = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var quotes;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, searchQuotes()];
            case 1:
                quotes = _a.sent();
                return [2 /*return*/, res.status(200).json({ quotes: quotes.rows })];
        }
    });
}); };
var searchById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, quote;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = Number(req.params.id);
                return [4 /*yield*/, searchQuotesById(id)];
            case 1:
                quote = _a.sent();
                return [2 /*return*/, res.status(200).json({ quote: quote.rows[0] })];
        }
    });
}); };
var searchByAuthor = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var author, quotes;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                author = req.params.author;
                return [4 /*yield*/, searchQuotesByAuthor(author.toLowerCase())];
            case 1:
                quotes = _a.sent();
                return [2 /*return*/, res.status(200).json({ quotes: quotes.rows })];
        }
    });
}); };
var searchByAuthorAndId = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var author, id, quote;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                author = req.params.author;
                id = Number(req.params.id);
                return [4 /*yield*/, searchQuoteByAuthorAndId(author.toLowerCase(), id)];
            case 1:
                quote = _a.sent();
                return [2 /*return*/, res.status(200).json({ quote: quote.rows })];
        }
    });
}); };
var editQuoteById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, quote, error;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = Number(req.params.id);
                quote = req.body;
                error = quoteSchema.validate(quote).error;
                if (error)
                    return [2 /*return*/, res.status(400).json({
                            message: error.message
                        })];
                return [4 /*yield*/, editQuote(quote, id)];
            case 1:
                _a.sent();
                return [2 /*return*/, res.status(200).json({
                        message: "QUOTE EDITED SUCCESSFULLY!"
                    })];
        }
    });
}); };
var editAuthorById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, author, error;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = Number(req.params.id);
                author = req.body;
                error = quoteAuthorSchema.validate(author).error;
                if (error)
                    return [2 /*return*/, res.status(400).json({
                            message: error.message
                        })];
                return [4 /*yield*/, editQuoteAuthor(author, id)];
            case 1:
                _a.sent();
                return [2 /*return*/, res.status(200).json({
                        message: "QUOTE EDITED SUCCESSFULLY!"
                    })];
        }
    });
}); };
var editFullQuoteById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, quote, error;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = Number(req.params.id);
                quote = req.body;
                error = quotesSchema.validate(quote).error;
                if (error)
                    return [2 /*return*/, res.status(400).json({
                            message: error.message
                        })];
                return [4 /*yield*/, editFullQuote(quote, id)];
            case 1:
                _a.sent();
                return [2 /*return*/, res.status(200).json({
                        message: "QUOTE EDITED SUCCESSFULLY!"
                    })];
        }
    });
}); };
var deleteQuoteById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = Number(req.params.id);
                return [4 /*yield*/, deleteQuote(id)];
            case 1:
                _a.sent();
                return [2 /*return*/, res.status(200).json({
                        message: "QUOTE SUCCESSFULLY DELETED!"
                    })];
        }
    });
}); };
export { create, search, searchById, searchByAuthor, searchByAuthorAndId, editQuoteById, editAuthorById, editFullQuoteById, deleteQuoteById };
