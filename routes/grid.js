var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  let query = req.query; 

  // Log the rows and cols values to the console (for debugging)
  console.log(`rows: ${query.rows}`);
  console.log(`cols: ${query.cols}`);
  res.render('grid', { title: 'Grid Display',query: query });
});

module.exports = router;
