var express = require('express');
var router = express.Router();
var axios=require('axios')

/* GET home page. */
router.get('/',async function(req, res, next) {
  var candidats=await axios("http://localhost:3030/candidats");
  const data=candidats.data.result;
  console.log(data);
  return res.render('index', { candidats:data });
});

module.exports = router;
