const express = require('express');
const app = express();
const db = require('./models')
const exphbs = require('express-handlebars');
const session = require("express-session");
require('dotenv').config();

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

const authRoutes = require('./controllers/authController');
app.use("/auth", authRoutes);

const frontEndRoutes = require('./controllers/frontendController');
app.use(frontEndRoutes);

db.sequelize.sync({force:false}).then(function(){
    app.listen(PORT);
})