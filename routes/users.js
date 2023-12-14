var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render("users", {
    title: 'Express Tutorial' , message:"Users page"
  })
});

module.exports = router;
