var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

// =============================================================
var reservations = [];
var waitlist = [];

//=====================================Routes====================================

//Home Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "hot-restaurant.html"));
});

// reservations.html = Displays all reservations via JSON
app.get("/reservation", function(req, res) {
  //return res.json(reservations);
  res.sendFile(path.join(__dirname, "reservation.html"));
});

//
app.get("/table", function(req, res) {
  res.sendFile(path.join(__dirname, "table.html"));
});

app.get("/showtable", function(req, res) {
  res.json(reservations);
});

app.get("/waitlist", function(req, res) {
  res.send(waitlist);
});

app.post("/reservations_submit", function (req, res) {
  if(reservations.length < 5) {
    reservations.push(req.body);
    console.log(reservations);
    res.send("<script type='text/javascript'>alert('ADDED');s</script>");
    //res.sendFile(path.join(__dirname, '/table.html'));
  } else {
    waitlist.push(req.body);
  }
});
