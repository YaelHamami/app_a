import { createPost, updatePost, getPostsBySenderId } from "../controllers/posts_controller";
import express from 'express';
export const postsRouter = express.Router();

postsRouter.post("/", createPost);
postsRouter.put('/:id', updatePost);
postsRouter.get('/:sender_id', getPostsBySenderId);