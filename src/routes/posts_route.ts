const express = require("express")
const app = express();
const dotenv = require("dotenv").config();
const router = express.Router();
const port = process.env.PORT;

router.get("/", (req : any, res : any) => {
    res.send("Get All Posts.");
});

module.exports = router;