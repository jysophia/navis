import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();
const password = process.env.VITE_POSTGRES_PASSWORD;
const port = process.env.VITE_POSTGRES_PORT ? parseInt(process.env.VITE_POSTGRES_PORT) : 5432;
const pool = new pg.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'scholarshipdb',
    password: password,
    port: port,
});

export { pool };