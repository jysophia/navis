import express from 'express';

class Server {
    public app;

    constructor() {
        this.app = express();
    }

    public start = (port: number) => {
        const result = new Promise((resolve, reject) => {
            this.app.listen(port, () => {
                resolve(port);
            }).on('error', (err) => reject(err));
        });
        return result;
    }
}

export default Server;