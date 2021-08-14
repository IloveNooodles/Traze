import express from 'express';
import mongoose from 'mongoose';

import TrashReport from '../models/trashReport.js';

const router = express.Router();

export const getLocations = async (req, res) => {
    try {
        const locations = await TrashReport.find({}, 'location');

        res.status(200).json(locations);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getReport = async (req, res) => {
    const { id } = req.params;

    try {
        const report = await TrashReport.findById(id);

        res.status(200).json(report);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createReport = async (req, res) => {
    const report = req.body;

    const newReport = new TrashReport({ ...report, createdAt: new Date().toISOString(), username: report.username })

    try {
        await newReport.save();

        res.status(200).send(newReport);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}


// Ganti ke statusnya jadi solved
export const deleteReport = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`Tidak ada laporan dengan id ${id}`);

    await TrashReport.findByIdAndRemove(id);

    res.json('Laporan berhasil dihapus');
}

export default router;

