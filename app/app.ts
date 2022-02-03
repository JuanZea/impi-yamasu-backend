import express, { Application, Request, Response } from 'express';
import api from '../routes/api';
import cors from 'cors';

export const app: Application = express();
app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response): void => {
    res.sendFile(`${__dirname}/index.html`);
});
app.use('/api', api);
