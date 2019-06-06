
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const models = require('./api/models');
const routes = require('./api');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', routes);
const port = 3001;


models.sequelize.sync({ force: true }).then(() => {
  app.listen(port, () => console.log(`Listening on port ${port}...`));
});