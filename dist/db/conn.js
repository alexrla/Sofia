import pg from "pg";
var Pool = pg.Pool;
import dotenv from "dotenv";
dotenv.config();
var connection = new Pool({
    connectionString: process.env.DATABASE_URL
});
export { connection };
