require("dotenv").config();
const db = require('./models/index');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const customAuthMiddleware = require('./middleware/custom-auth-middleware');
const cookieParser = require('cookie-parser');
const hbs = require('hbs');

app.set('views', path.join(__dirname + '/layout'))
app.set('view engine', 'hbs')


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('/public'))

db.sequelize.sync({ force: true }).then(() => {
  
  app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
  });
});





