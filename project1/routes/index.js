var express = require('express');
var router = express.Router();

//db
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://DONGOOK:rnlflqhdl@member-ca6rk.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});





module.exports = router;
