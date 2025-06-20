// utils/errors/index.js
// For easy import of all error classes
module.exports = {
  AppError: require("./AppError"),
  BadRequestError: require("./BadRequestError"),
  UnauthorizedError: require("./UnauthorizedError"),
  ForbiddenError: require("./ForbiddenError"),
  NotFoundError: require("./NotFoundError"),
  ConflictError: require("./ConflictError"),
//   ValidationError: require("./ValidationError"),
};
