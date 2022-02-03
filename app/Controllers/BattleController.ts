import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { validateId, validatePlayer } from '../helpers/validators';

const prisma = new PrismaClient();

export default {
    create: async (req: Request, res: Response) => {
        let status: number = 200;

        const newBattle = await prisma.battle.create({
            data: {
                id: validateId(req.body.id),
                open: true,
                hostPlayer: validatePlayer(req.body.player),
            },
        });

        res.send(newBattle).status(status);
    },

    join: async (req: Request, res: Response) => {
        let status: number = 200;

        let battle = await prisma.battle.findUnique({
            where: {
                id: validateId(req.body.id),
            },
        });

        if (!battle.open) res.status(404).send({ message: 'Battle is close' });
        else {
            battle = await prisma.battle.update({
                where: { id: battle.id },
                data: { open: false, guestPlayer: validatePlayer(req.body.player) },
            });

            res.send(battle).status(status);
        }
    },

    info: async (req: Request, res: Response) => {
        let status: number = 200;

        const battle = await prisma.battle.findUnique({
            where: {
                id: validateId(req.body.id),
            },
        });

        res.send(battle).status(status);
    },

    start: async (req: Request, res: Response) => {
        let status: number = 200;

        let battle = await prisma.battle.findUnique({
            where: {
                id: validateId(req.body.id),
            },
        });

        const data: {[k: string]: any} = {};

        if(req.body.rol === 'host') data.hostPerks = req.body.perks
        if(req.body.rol === 'guest') data.guestPerks = req.body.perks

        battle = await prisma.battle.update({
            where: { id: battle.id },
            data,
        });

        res.send(battle).status(status);
    },
};
