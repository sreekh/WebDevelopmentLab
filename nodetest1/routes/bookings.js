var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  var db = req.db;
  var bookingcollection = db.get('bookingcollection');
  bookingcollection.find({},{},function(e, docs){
  	res.render('bookings', {"bookings":docs});
  });
});
router.get('/newbooking', function(req, res) {
  	res.render('newbooking', {"title":"Add new booking"});
});

router.get('/selectseat', function(req, res) {
  	res.render('selectseat', {"title":"Add new booking"});
});


/* POST to Add User Service */
router.post('/addbooking', function(req, res) {

    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var busName = req.body.busName;
    var bookingName = req.body.bookingName;
    var routeId = req.body.routeId;
    var travelDate = req.body.travelDate;
    var seats = [3,4];

    // Set our collection
    var collection = db.get('bookingcollection');

    // Submit to the DB
    collection.insert({
        "busName" : busName,
        "bookingname" : bookingName,
        "routeId" : routeId,
        "seats" : seats,
        "traveldate" : travelDate
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // And forward to success page
            res.redirect("/bookings");
        }
    });
});
module.exports = router;
