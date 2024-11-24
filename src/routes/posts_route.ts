import express from 'express';
const app = express();
import { getAllPosts, createPost, updatePost } from "../controllers/posts_controller";
export const postsRouter = express.Router();

// Get All Posts
postsRouter.get("/", getAllPosts);

// Create A Post
postsRouter.post("/", createPost);

// Update A Post
postsRouter.put('/:id', updatePost);
