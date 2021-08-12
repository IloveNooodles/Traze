import express from 'express';

import { getLocations, getReport, createReport } from '../controllers/trashReport.js';

const router = express.Router();

router.get('/', getLocations);
router.get('/:id', getReport)
router.post('/create', createReport);

export default router;