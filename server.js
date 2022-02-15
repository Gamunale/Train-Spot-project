const path = require('path');
const express = require('express');
require("dotenv").config();

const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const Account = require("./models/Account.js");
const Contact = require("./models/Contact.js");
const Passenger = require("./models/Passenger.js");
const Station = require("./models/Station.js");
const Ticket = require("./models/Ticket.js");
const Train = require("./models/Train.js");

sequelize.sync({force:true}).then(() => {
  app.listen(PORT, () => console.log('Listening ' + PORT));
});
