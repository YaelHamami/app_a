const PostModel = require("../models/posts_model");

const getAllPosts = async (req : any, res : any) => {
  try {
    // const posts = await PostModel.find();
    // res.send(posts);
    res.send("Get All Posts");
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  getAllPosts
};