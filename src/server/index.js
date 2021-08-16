import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import trashRoutes from './routes/trashReports.js';
import userRoutes from './routes/users.js';

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;
const CONNECTION_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.epqqw.gcp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

app.use(express.json({ limit: '10mb'}));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(cors());

app.use('/data', trashRoutes);
app.use('/user', userRoutes);

app.get('/', (req, res) => {
    return res.send("Connected!");
});

mongoose.connect(CONNECTION_URL, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => app.listen(PORT, () => console.log(`Server Running on Port ${PORT}`)))
    .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);