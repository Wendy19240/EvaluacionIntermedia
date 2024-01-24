// backend/index.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const evaluationRoutes = require('./routes/evaluationRoutes');
const db = require('./database');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());
app.use('/api/evaluations', evaluationRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
