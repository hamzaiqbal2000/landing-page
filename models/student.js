const Joi = require("joi");
const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
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

const Student = mongoose.model("Student", studentSchema);

function validateStudent(student) {
  const schema = {
    email: Joi.string().min(5).max(255).required().email(),
    code: Joi.string(),
  };

  return Joi.validate(student, schema);
}

exports.Student = Student;
exports.validate = validateStudent;
