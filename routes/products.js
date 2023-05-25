var express = require('express');
var router = express.Router();

/* GET products listing. */
router.get('/', function(req, res, next) {
  res.render('products/products', { title: "My products"})
});

router.get('/categories/', (req, res, next)=>{
  res('Respond with a resource ');
})

module.exports = router;
