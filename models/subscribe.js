const Joi = require("joi");
const mongoose = require("mongoose");

const subscribeSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    minlength: 5,
    maxlength: 255,
  },
  code: {
    type: String,
  },
});

const Subscribe = mongoose.model("Subscribe", subscribeSchema);

function validateSubscribe(subscribe) {
  const schema = {
    email: Joi.string().min(5).max(255).required().email(),
    code: Joi.string(),
  };

  return Joi.validate(subscribe, schema);
}

exports.Subscribe = Subscribe;
exports.validate = validateSubscribe;
