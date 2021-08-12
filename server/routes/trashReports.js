import express from 'express';

import { getLocations, getReport, createReport, deleteReport } from '../controllers/trashReport.js';

import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', getLocations);
router.get('/:id', getReport);
router.post('/create', auth, createReport);
router.delete('/:id', auth, deleteReport);

export default router;