import { Request, Response } from 'express';

export default {
    create: async (req: Request, res: Response) => {
        let status: number = 200;
        let response: Object = {};

        res.send(response).status(status);
    },
};
