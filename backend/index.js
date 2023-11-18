const express = require('express');
const bodyParser = require('body-parser');
const questionRoutes = require('./routes/questions');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use('/api/questions', questionRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
