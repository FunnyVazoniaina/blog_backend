const mongoose = require("mongoose");
const generateSlug = require("../middlewares/generateSlug.middleware.js");

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 150,
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
    },
    content: {
      type: String,
      required: true,
    },
    coverImage: {
      type: String,
      default: "",
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // linked with the user entity
      required: true,
    },
    tags: {
      type: [String],
      default: [],
    },
    likes: {
      type: Number,
      default: 0,
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true, // createdAt et updatedAt automatiquement
  }
);

// Middleware to generate slug automatically before validation
postSchema.pre("validate", generateSlug);

module.exports = mongoose.model("Post", postSchema);