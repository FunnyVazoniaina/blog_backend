const slugify = require("slugify");

/**
 * Middleware Mongoose pour générer automatiquement un slug à partir du titre d’un post.
 */
const generateSlug = function (next) {
  if (this.title && !this.slug) {
    this.slug = slugify(this.title, { lower: true, strict: true });
  }
  next();
};
module.exports = generateSlug;
