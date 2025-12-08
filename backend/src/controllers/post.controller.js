import { Post } from "../models/post.model.js";

// Create a Post

const createPost = async (req, res) => {
  try {
    const { name, description, age } = req.body;
    if (!name || !description || !age) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const post = await Post.create({ name, description, age });
    res.status(201).json({
      message: "Post created successfully",
      post,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error,
    });
  }
};

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json({
      message: "Posts retrieved successfully ",
      posts,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error,
    });
  }
};

export { createPost, getPosts };
