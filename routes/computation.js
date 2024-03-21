var express = require('express');
var router = express.Router();

var randint1 = Math.floor(Math.random() * 100) 
var randint2 = Math.floor(Math.random() * 100)

var results = Math.hypot(randint1, randint2);

router.get('/', function(req, res, next) {
    res.send(`Hypotenuse Function applied to ${randint1} and ${randint2} is ${results}`);
});

module.exports = router;
