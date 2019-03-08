const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validatePostInput(data) {
  let errors = {};

  // Force empty input to be an empty string
  data.text = !isEmpty(data.text) ? data.text : "";

  // Text
  if (Validator.isEmpty(data.text)) {
    errors.text = "Text field is required";
  } else if (!Validator.isLength(data.text, { min: 5, max: 300 })) {
    errors.text = "Post must be between 5 and 300 characters";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
