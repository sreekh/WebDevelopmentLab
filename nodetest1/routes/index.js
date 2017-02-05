var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/*router.get('/bookings', function(req, res) {
  var db = req.db;
  var bookingcollection = db.get('bookingcollection');
  bookingcollection.find({},{},function(e, docs){
  	res.render('bookings', {"bookings":docs});
  });
  // res.send({"bookings":[{"bookingname":"Testing1"}]});
});*/

module.exports = router;
