import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/user.js';

export const getLeaderboard = async (req, res) => {
    try {
        const leaderboard = await User.find({}, ['username', 'score']);

        res.status(200).json(leaderboard);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const signup = async (req, res) => {
    const { username, name, email, password, confirmPassword, address } = req.body;

    try {
        const existingUser = await User.findOne({ username });

        if (existingUser) return res.status(400).json({ message: "Username telah terpakai." });

        if (password !== confirmPassword) return res.status(400).json({ message: "Password tidak sama." });

        const hashedPassword = await bcrypt.hash(password, 10);

        const result = await User.create({ username: username, email: email, password: hashedPassword, name: name, address: address })

        const token = jwt.sign({ username: result.username, id: result._id }, 'traze', { expiresIn: "1h"})

        res.status(200).json({ result: result, token })
    } catch (error) {
        res.status(500).json({ message: "Ada yang salah." , errorMessage: error.message })
    }
}

export const signin = async (req, res) => {
    const { username, password } = req.body;

    try {
        const existingUser = await User.findOne({ username });

        if (!existingUser) return res.status(400).json({ message: "Username atau password salah."})

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

        if (!isPasswordCorrect) return res.status(400).json({ message: "Username atau password salah."});

        const token = jwt.sign({ username: existingUser.username, id: existingUser._id }, 'traze', { expiresIn: "1h"})

        res.status(200).json({ result: existingUser, token })
    } catch (error) {
        res.status(500).json({ message: "Ada yang salah.", errorMessage: error.message })
    }
}
