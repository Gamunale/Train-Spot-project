const path = require('path');
const express = require('express');
require("dotenv").config();

const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

sequelize.sync().then(() => {
  app.listen(PORT, () => console.log('Listening ' + PORT));
});
