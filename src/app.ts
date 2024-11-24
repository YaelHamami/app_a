import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

// const port = process.env.PORT;
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// mongoose.connect(process.env.DB_CONNECT as string);
// const db = mongoose.connection;
// db.on("error", (error) => console.error(error));
// db.once("open", () => console.log("Connected to database"));

// Routes
// app.use('/posts', postRoutes);
// app.use('/comments', commentRoutes);
app.get('/', (req, res) => {
    res.send("hello world")
})
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});