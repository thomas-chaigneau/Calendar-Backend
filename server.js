
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const models = require('./models');
const routerEvents = require('./routes/events');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/events', routerEvents);

const port = 3002;

models.sequelize.sync({ force: true }).then(() => {
  app.listen(port, () => console.log(`Listening on port ${port}...`));
});