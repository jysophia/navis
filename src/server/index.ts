import express from 'express';
import { api } from './api';

const app = express();
const port = 3002;
app.use(api);
app.get('/api/hi', (req, res) => {
    res.send('Hello World!')
    console.log(req.query);
});
app.listen(port, () => console.log("Server started on port " + port));