import { Router } from 'express';
import BattleController from '../app/Controllers/BattleController';
import PlayerController from '../app/Controllers/PlayerController';
const router = Router();

// Api routes

// Players
router.post('/register', PlayerController.register);
router.post('/login', PlayerController.login);

// Battle
router.post('/create-battle/:autor', BattleController.create);

export default router;
