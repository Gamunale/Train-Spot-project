const router = require('express').Router();

const userRoutes = require('./userRoutes');

router.use('/users', userRoutes);

//call to API 
console.log(fetch('api.rtt.io/api/v1/'));


module.exports = router;