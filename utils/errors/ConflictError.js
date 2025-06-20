// utils/errors/ConflictError.js
//for duplicate resources or actions that cannot be performed due to a conflict with the current state of the resource.
const AppError = require("./AppError");

class ConflictError extends AppError {
  constructor(message = "Conflict") {
    super(message, 409);
  }
}

module.exports = ConflictError;
