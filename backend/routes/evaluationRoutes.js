// backend/routes/evaluationRoutes.js
const express = require('express');
const router = express.Router();
const evaluationController = require('../controllers/evaluationController');

router.post('/create', evaluationController.createEvaluation);

module.exports = router;
