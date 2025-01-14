import express from 'express';
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
// import { api } from './api';

const app = express();
const port = 3002;
app.use(express.json());
app.use(cors());
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbPath = path.join(__dirname, '../../../db/scholarships.json');
app.post('/api/scholarships', (req, res) => {
    console.log(dbPath);
    let scholarship = req.body;
    console.log('Running fs.outputFilSync');
    fs.outputFileSync(dbPath, JSON.stringify(scholarship));
    console.log('Finished running fs.outputFileSync');
    res.status(200).send('Scholarships added successfully');
})
// app.get('/api/hi', (req, res) => {
//     res.send('Hello World!')
//     console.log(req.query);
// });
app.listen(port, () => console.log("Server started on port " + port));