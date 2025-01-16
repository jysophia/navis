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
app.get("/api/scholarships", async (req, res) => {
    try {
        console.log(req.body);
        const allScholarships = await pool.query("SELECT * FROM scholarships");
        res.json(allScholarships.rows);
    } catch (error) {
        console.error("Error getting scholarships from DB:", error);
        res.status(500).send("Error getting scholarships from DB");
    }
});
// get a scholarship
app.get("/api/scholarships/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const scholarship = await pool.query("SELECT * FROM scholarships WHERE id = $1", [id]);
        res.json(scholarship.rows);
    } catch (error) {
        console.error("Error getting scholarship from DB:", error);
        res.status(500).send("Error getting scholarship from DB");
    }
});
// update a scholarship
app.put("/api/scholarships/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { saved } = req.body;
        await pool.query(
            "UPDATE scholarships SET saved = $1 WHERE id = $2",
            [saved, id]
        );
        res.status(200).send("Scholarship updated successfully");
    } catch (error) {
        console.error("Error updating scholarship in DB:", error);
        res.status(500).send("Error updating scholarship in DB");
    }
});
// delete a scholarship
app.delete("/api/scholarships/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { saved } = req.body;
        await pool.query("DELETE FROM scholarships WHERE saved = $1 AND id = $2", [saved, id]);
        res.status(200).send("Scholarship deleted successfully");
    } catch (error) {
        console.error("Error deleting scholarship from DB:", error);
        res.status(500).send("Error deleting scholarship from DB");
    }
});


app.listen(port, () => console.log("Server started on port " + port));