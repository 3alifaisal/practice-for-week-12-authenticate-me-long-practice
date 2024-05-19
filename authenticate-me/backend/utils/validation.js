const { validationResult } = require("express-validator");

const handleValidationErrors = (req, _res, next) => {
  const ValidationErrors = validationResult(req);

  if (!ValidationErrors.isEmpty()) {
    const errors = ValidationErrors.array().map((error) => error.msg);
    const err = Error("Bad request.");
    err.errors = errors;
    err.status = 400;
    err.title = "Bad request.";
    next(err);
  }
  next();
};

module.exports = {
  handleValidationErrors,
};
