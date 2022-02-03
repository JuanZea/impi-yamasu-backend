import { Router } from 'express';
import BattleController from '../app/Controllers/BattleController';
const router = Router();

// Api routes
router.post('/create-battle/:autor', BattleController.create);

export default router;
