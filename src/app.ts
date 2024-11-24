import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from "dotenv";

dotenv.config();
const port = process.env.PORT;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send("hello world")
})

const posts_routes = require("./routes/posts_route.ts");
app.use("/posts", posts_routes);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});