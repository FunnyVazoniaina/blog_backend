const express = require("express");
const router = express.Router();
const {
  createPost,
  getAllPosts,
  getPostBySlug,
  updatePostBySlug,
  deletePostBySlug,
  getPostsByAuthor,
} = require("../controllers/post.controller");

router.post("/create", createPost);
router.get("/allPosts", getAllPosts);
router.get("/:slug", getPostBySlug);
router.put("/:slug", updatePostBySlug);
router.delete("/:slug", deletePostBySlug);
router.get("/author/:authorId", getPostsByAuthor);

module.exports = router;
