const Comment = require("../models/comment.model");
const { param } = require("../routes/post.routes");
const BadRequestError = require("../utils/errors/BadRequestError");
const NotFoundError = require("../utils/errors/NotFoundError");

class CommentService {
  static async createComment(postId, userId, content) {
    if (!postId || !userId || !content) {
      throw new BadRequestError("Post ID, User ID, and content are required");
    }

    const comment = new Comment({
      postId,
      userId,
      content,
    });

    await comment.save();
    return comment;
  }
  static async getCommentsByPostId(postId) {
    if (!postId) {
      throw new BadRequestError("Post ID is required");
    }

    const comments = await Comment.find({ postId }).populate(
      "userId",
      "name email"
    );
    if (comments.length === 0) {
      throw new NotFoundError("No comments found for this post");
    }

    return comments;
  }
  static async updateComment(commentId, userId, content) {
    if (!commentId || !userId || !content) {
      throw new BadRequestError(
        "Comment ID, User ID, and content are required"
      );
    }

    const comment = await Comment.findOneAndUpdate(
      { _id: commentId, userId },
      { content },
      { new: true }
    ).populate("userId", "name email");

    if (!comment) {
      throw new NotFoundError(
        "Comment not found or you do not have permission to update it"
      );
    }

    return comment;
  }
  static async deleteComment(commentId, userId) {
    if (!commentId || !userId) {
      throw new BadRequestError("Comment ID and User ID are required");
    }

    const comment = await Comment.findOneAndDelete({ _id: commentId, userId });
    if (!comment) {
      throw new NotFoundError(
        "Comment not found or you do not have permission to delete it"
      );
    }

    return { message: "Comment deleted successfully" };
  }
  static async getCommentById(commentId) {
    if (!commentId) {
      throw new BadRequestError("Comment ID is required");
    }

    const comment = await Comment.findById(commentId).populate(
      "userId",
      "name email"
    );
    if (!comment) {
      throw new NotFoundError("Comment not found");
    }
    return comment;
  }
  static async getCommentsByUserId(userId) {
    if (!userId) {
      throw new BadRequestError("User ID is required");
    }

    const comments = await Comment.find({ userId }).populate(
      "postId",
      "title slug"
    );
    if (comments.length === 0) {
      throw new NotFoundError("No comments found for this user");
    }

    return comments;
  }
}
module.exports = CommentService;
