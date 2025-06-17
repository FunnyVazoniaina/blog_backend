const Post = require("../models/post.model.js");

class PostService {
  /**
   * Create a new post.
   * @param {Object} postData - The data for the new post.
   * @returns {Promise<Object>} The created post.
   */
  static async createPost(postData) {
    try {
      const post = new Post(postData);
      return await post.save();
    } catch (error) {
      throw new Error("Error creating post: " + error.message);
    }
  }
  /**
   * Get all posts with pagination.
   * @param {Object} query - The query parameters for pagination.
   * @returns {Promise<Object>} The paginated posts.
   */
  static async getAllPosts(query) {
    try {
      const { page = 1, limit = 10 } = query;
      const skip = (page - 1) * limit;
      const totalPosts = await Post.countDocuments();
      const posts = await Post.find()
        .skip(skip)
        .limit(Number(limit))
        .populate("author", "name email")
        .sort({ createdAt: -1 });

      return {
        totalPosts,
        currentPage: Number(page),
        totalPages: Math.ceil(totalPosts / limit),
        posts,
      };
      console.log("Posts fetched successfully"); 
      
    } catch (error) {
      throw new Error("Error fetching posts: " + error.message);
    }
  }
  /**
   * Get a post by slug.
   * @param {String} slug - The slug of the post.
   * * @returns {Promise<Object>} The post with the given slug.
   */
  static async getPostBySlug(slug) {
    const post = await Post.findOne({ slug }).populate("author", "name email");
    if (!post) {
      throw new Error("Post not found");
    }
    return post;
  }
  /**
   * Update a post by slug.
   * @param {String} slug - The slug of the post to update.
   * @param {Object} updateData - The data to update the post with.
   * @returns {Promise<Object>} The updated post.
   */
  static async updatePostBySlug(slug, updateData) {
    const post = await Post.findOneAndUpdate({ slug }, updateData, {
      new: true,
      runValidators: true,
    }).populate("author", "name email");

    if (!post) {
      throw new Error("Post not found");
    }

    return post;
  }
  /**
   * Delete a post by slug.
   * @param {String} slug - The slug of the post to delete.
   * @returns {Promise<Object>} The deleted post.
   */
  static async deletePostBySlug(slug) {
    const post = await Post.findOneAndDelete({ slug });
    if (!post) {
      throw new Error("Post not found");
    }
    return post;
  }
  /**
   * Like a post by slug.
   * @param {String} slug - The slug of the post to like.
   * @returns {Promise<Object>} The updated post with incremented likes.
   */
  static async likePostBySlug(slug) {
    const post = await Post.findOneAndUpdate(
      { slug },
      { $inc: { likes: 1 } },
      { new: true }
    ).populate("author", "name email");

    if (!post) {
      throw new Error("Post not found");
    }

    return post;
  }
  /**
   * Unlike a post by slug.
   * @param {String} slug - The slug of the post to unlike.
   * @returns {Promise<Object>} The updated post with decremented likes.
   */
  static async unlikePostBySlug(slug) {
    const post = await Post.findOneAndUpdate(
      { slug },
      { $inc: { likes: -1 } },
      { new: true }
    ).populate("author", "name email");

    if (!post) {
      throw new Error("Post not found");
    }

    return post;
  }
  /**
   * Get all posts by a specific author.
   * @param {String} authorId - The ID of the author.
   * @returns {Promise<Object>} The posts by the specified author.
   */
  static async getPostsByAuthor(authorId) {
    const posts = await Post.find({ author: authorId })
      .populate("author", "name email")
      .sort({ createdAt: -1 });

    if (posts.length === 0) {
      throw new Error("No posts found for this author");
    }

    return posts;
  }
}
module.exports = PostService;
