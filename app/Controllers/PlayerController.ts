import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { validatePlayerData } from '../helpers/validators';

const prisma = new PrismaClient();

export default {
    register: async (req: Request, res: Response) => {
        let status: number = 200;

        const playerData = validatePlayerData(req.body);

        const newPlayer = await prisma.player.create({
            data: playerData,
        });

        res.send(newPlayer).status(status);
    },

    login: async (req: Request, res: Response) => {
        let status: number = 200;

        const playerData = validatePlayerData(req.body);

        const player = await prisma.player.findMany({
            where: {
              name: playerData.name,
              password: playerData.password,
            },
          });

        res.send(player).status(status);
    },
};
