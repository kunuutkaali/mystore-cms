var express = require('express');
var router = express.Router();
const axios = require('axios')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'MyStore CMS' });
});
/* TEST API */
router.get('/test', async(req, res, next)=>{
  try {
    const response = await axios.get(`http://localhost:3000/test`);
    res.json(response.data);
  } catch (error) {
    console.log(error);
    // Handle errors
  }
})

module.exports = router;
