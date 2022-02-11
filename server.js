const path = require('path');
const express = require('express');
<<<<<<< HEAD
const session = require('express-session');
const exphbs = require('express-handlebars');
//const SequelizeStore = require('connect-session-sequelize')(session.Store);

//const routes = require('./controllers');
const sequelize = require('./config/connection');
//const helpers = require('./utils/helpers');
=======
require("dotenv").config();

const sequelize = require('./config/connection');
>>>>>>> f896166e855b211c1f534b0953e93d0a35cb91c1

const app = express();
const PORT = process.env.PORT || 3001;



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

<<<<<<< HEAD
//app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
=======
sequelize.sync().then(() => {
  app.listen(PORT, () => console.log('Listening ' + PORT));
>>>>>>> f896166e855b211c1f534b0953e93d0a35cb91c1
});
