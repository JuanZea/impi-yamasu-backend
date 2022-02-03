import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { validateAuthorId } from '../helpers/validators';

const prisma = new PrismaClient();

export default {
    create: async (req: Request, res: Response) => {
        let status: number = 200;

        const newBattle = await prisma.battle.create({
            data: {
                authorId: validateAuthorId(req.params.autor),
                open: true,
            },
        });

        res.send(newBattle).status(status);
    },
};
