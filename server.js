const express = require('express');
const app = express();
const db = require('./models')
const exphbs = require('express-handlebars');
const session = require("express-session");
require('dotenv').config();
const sequelize = require('./config/connection');

const PORT = process.env.PORT || 3000;
 
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 50000
    }
}))

app.use( express.static('public'));

const Account = require("./models/Account.js");
const Contact = require("./models/Contact.js");
const Passenger = require("./models/Passenger.js");
const Station = require("./models/Station.js");
const Ticket = require("./models/Ticket.js");
const Train = require("./models/Train.js");

const authRoutes = require('./controllers/authController');
app.use("/auth", authRoutes);

const frontEndRoutes = require('./controllers/frontendController');
app.use(frontEndRoutes);

db.sequelize.sync({force:false}).then(function(){
    app.listen(PORT);
})