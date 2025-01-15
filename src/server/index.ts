import express from 'express';
import cors from 'cors';
import { pool } from './db';

const app = express();
const port = process.env.VITE_SERVER_PORT ? parseInt(process.env.VITE_SERVER_PORT) : 3002;

// middleware
app.use(express.json());
app.use(cors());

// create a scholarship
app.post('/api/scholarships', async (req, res) => {
    let scholarships = req.body;
    try {
        for (const scholarship of scholarships) {
            const { name, url, description, saved } = scholarship;
            console.log('Awaiting pool.query()');
            await pool.query(
                'INSERT INTO scholarships (name, url, description, saved) VALUES ($1, $2, $3, $4) RETURNING *',
                [name, url, description, saved]
            );
            console.log('Inserted scholarship:', scholarship);
        }
        res.status(200).send('Scholarships added successfully');
    } catch (error) {
        await pool.query('ROLLBACK');
        console.error('Error saving scholarships to DB:', error);
        res.status(500).send('Error saving scholarships to DB');
    }
});
// get all scholarships

// get a scholarship

// update a scholarship

// delete a scholarship



app.listen(port, () => console.log("Server started on port " + port));