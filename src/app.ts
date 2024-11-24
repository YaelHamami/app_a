import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from "dotenv";
import { postsRouter } from './routes/posts_route';

dotenv.config();
const port = process.env.PORT;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// mongoose.connect(process.env.DB_CONNECT as string);
// const db = mongoose.connection;
// db.on("error", (error) => console.error(error));
// db.once("open", () => console.log("Connected to database"));

// Routes
app.use('/posts', postsRouter);
// app.use('/comments', commentRoutes);

app.get('/', (req, res) => {
    res.send("hello world")
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});