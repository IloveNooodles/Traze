import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/user.js';

export const signup = async (req, res) => {
    const { username, name, email, password, confirmPassword, address } = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if (existingUser) return res.status(400).json({ message: "Username telah terpakai." });

        if (password !== confirmPassword) return res.status(400).json({ message: "Password tidak sama." });

        const hashedPassword = await bcrypt.hash(password, 10);

        const result = await User.create({ email, password: hashedPassword, name: name })

        const token = jwt.sign({ email: result.email, id: result._id }, 'traze', { expiresIn: "1h"})

        res.status(200).json({ result: result, token })
    } catch (error) {
        res.status(500).json({ message: "Ada yang salah." , errorMessage: error.message })
    }
}

export const signin = async (req, res) => {
    const { username, password } = req.body;

    try {
        const existingUser = await User.findOne({ username });

        if (!existingUser) return res.status(404).json({ message: "Username atau password salah."})

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

        if (!isPasswordCorrect) return res.status(400).json({ message: "Username atau password salah."});

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, 'test', { expiresIn: "1h"})

        res.status(200).json({ result: existingUser, token })
    } catch (error) {
        res.status(500).json({ message: "Ada yang salah." })
    }
}
