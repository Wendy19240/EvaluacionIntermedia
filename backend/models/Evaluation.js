// backend/models/Evaluation.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const evaluationSchema = new Schema({
  title: String,
  questions: [
    {
      text: String,
      options: [String],
      correctAnswer: String,
    },
  ],
});

module.exports = mongoose.model('Evaluation', evaluationSchema);
