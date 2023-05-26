var express = require('express');
var router = express.Router();

const axios = require('axios');
const apiBaseUrl = "http://localhost:3000"

/* GET products listing. */
router.get('/', async function(req, res, next) {
  /* Get products from API */
  let params = req.query && req.query
  let data = {}
  try {
    let categoryUrl = apiBaseUrl + '/categories'
    const categoriesResponse = await axios.get(categoryUrl)
    data.categories = categoriesResponse.data;
    try {
      let productsUrl = apiBaseUrl + '/products'
      const productsResponse = await axios.get(productsUrl, { params });
      data.products = productsResponse.data
      res.render('products/products', { title: "My products", data:data})
    } catch (error) {
      res.status(400).json(error.code);
    }
  } catch (error) {
    res.status(400).json(error.code);
  }
});


/* view single product */
router.get('/product', async(req, res, next)=>{
  let params = req.query
  let url = apiBaseUrl + '/products/product'
  try {
    const response = await axios.get(url, { params });
    if(response.data.length > 0){
      let data = {product:response.data[0]}
      res.render('products/product', {data: data})
    }else{
      res.render('products/product', {data: {}})
    }
  } catch (error) {
    res.status(400).json(error.code);
  }
})

router.get('/categories/', (req, res, next)=>{
  res.send('Respond with a resource ');
})

module.exports = router;
