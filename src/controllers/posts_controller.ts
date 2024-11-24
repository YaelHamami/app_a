import { postModel } from "../models/posts_model";

export const getAllPosts = async (req: any, res: any) => {
    try {
        // const posts = await PostModel.find();
        // res.send(posts);
        res.send("Get All Posts");
    } catch (error: any) {
        res.status(400).send(error.message);
    }
};

export const createPost = async (req: any, res: any) => {
    const postBody = req.body;
    try {
        // const post = await postModel.create(postBody);
        // res.status(201).send(post);
        res.send("create Post");
    } catch (error: any) {
        res.status(400).send(error.message);
    }
};

export const updatePost = async (req: any, res: any) => {
    try {
        // const updatedPost = await postModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        // if (!updatedPost) return res.status(404).json({ message: 'Post not found' });
        // res.status(200).json(updatedPost);
        res.send("update Post");
    } catch (err: any) {
        res.status(500).json({ error: err.message });
    }
};

export const getPostById = async (req: any, res: any) => {
    try {
        // const getPostById = await postModel.findById(req.params.id, req.body, { new: true });
        // if (!getPostById) return res.status(404).json({ message: 'Post not found' });
        // res.status(200).json(getPostById);
        res.send("Get Post By Id");
    } catch (err: any) {
        res.status(500).json({ error: err.message });
    }
};