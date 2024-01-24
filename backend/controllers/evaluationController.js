// backend/controllers/evaluationController.js
const Evaluation = require('../models/Evaluation');

exports.createEvaluation = async (req, res) => {
  try {
    const { title, questions } = req.body;
    const newEvaluation = new Evaluation({ title, questions });
    await newEvaluation.save();
    res.status(201).json({ message: 'Evaluation created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
