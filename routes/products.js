var express = require('express');
var router = express.Router();

/* GET products listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/categories/', (req, res, next)=>{
  res('Respond with a resource ');
})

module.exports = router;