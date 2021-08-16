import express from 'express';

import { getLeaderboard, signin, signup } from '../controllers/user.js';

const router = express.Router();

router.get('/leaderboard', getLeaderboard);
router.post('/signin', signin);
router.post('/signup', signup);

export default router;