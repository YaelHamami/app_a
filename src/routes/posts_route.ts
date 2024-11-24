const express = require("express")
const app = express();
const dotenv = require("dotenv").config();
const router = express.Router();
const port = process.env.PORT;

const postsController = require("../controllers/posts_controllers")


router.get("/", postsController.getAllPosts);


module.exports = router;