import { postModel } from "../models/posts_model";

export const getPosts = async (req: any, res: any) => {
    try {
        // const { sender } = req.query; // Check for query parameter

        // // If sender is provided, filter posts by sender
        // if (sender) {
        //     const posts = await postModel.find({ sender });
        //     res.status(200).json(posts);
        // } else {
        //     // If no sender is provided, return all posts
        //     const posts = await postModel.find();
        //     res.status(200).json(posts);
        // }

        res.send("Get Posts");
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