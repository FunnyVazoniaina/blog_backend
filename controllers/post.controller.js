const PostService = require("../services/post.service");

//Status handlers for Post creation
exports.createPost = async (req, res) => {
  try {
    
    const postData = req.body;
    const result = await PostService.createPost(postData);
    res.status(201).json({
      message: "Post created successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
exports.getAllPosts = async (req, res) => {
  try {
    const query = req.query;
    const result = await PostService.getAllPosts(query);
    res.status(200).json({
      message: "Posts retrieved successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
exports.getPostBySlug = async (req, res) => {
  try {
    const slug = req.params.slug;
    const result = await PostService.getPostBySlug(slug);
    res.status(200).json({
      message: "Post retrieved successfully",
      data: result,
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};
exports.updatePostBySlug = async (req, res) => {
  try {
    const slug = req.params.slug;
    const updateData = req.body;
    const result = await PostService.updatePostBySlug(slug, updateData);
    res.status(200).json({
      message: "Post updated successfully",
      data: result,
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};
exports.deletePostBySlug = async (req, res) => {
  try {
    const slug = req.params.slug;
    const result = await PostService.deletePostBySlug(slug);
    res.status(200).json({
      message: "Post deleted successfully",
      data: result,
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};
exports.likePost = async (req, res) => {
  try {
    const slug = req.params.slug;
    const result = await PostService.likePost(slug, req.user._id);
    res.status(200).json({
      message: "Post liked successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
exports.unlikePost = async (req, res) => {
  try {
    const slug = req.params.slug;
    const result = await PostService.unlikePost(slug, req.user._id);
    res.status(200).json({
      message: "Post unliked successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
exports.getPostsByAuthor = async (req, res) => {
  try {
    const authorId = req.params.authorId;
    const result = await PostService.getPostsByAuthor(authorId);
    res.status(200).json({
      message: "Posts by author retrieved successfully",
      data: result,
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};
