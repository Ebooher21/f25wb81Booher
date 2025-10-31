var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('kangaroo', { title: 'Search Results Kangaroo' });
});

module.exports = router;
