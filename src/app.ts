import express from 'express';
import mongoose from 'mongoose';
const app = express();

app.use(express.json());
mongoose.connect('mongodb://127.0.0.1:27017/myapp');

export default app;
