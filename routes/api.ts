import { Router } from 'express';
import BattleController from '../app/Controllers/BattleController';
const router = Router();

// Api routes

// Battle
router.post('/create-battle', BattleController.create);
router.post('/join-battle', BattleController.join);
router.post('/battle-info', BattleController.info);

export default router;
