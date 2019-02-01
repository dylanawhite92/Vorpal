//Dependencies
var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");

// Require Magic Item Shop model
var db = require("./models/Item");

// Initialize express
var app = express();

// Set host port
var PORT = process.env.PORT || 3000;

// Configure middleware

// use morgan for logging requests
app.use(logger("dev"));
// Parse request as JSON
app.use(express.urlencoded({ extended : true}));
app.use(express.json());

// Make public a static folder
app.use(express.static("public"));

// If deployed on Heroku, use the remote database, otherwise use the local database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/dnd";

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

// Routes

// Home route
app.get("/", function(req, res) {
    res.send("index.html");
});

// Route for showing all items in the db
app.get("/all", function(req, res) {
    db.find({})
    .then(function(data) {
      res.json(data);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});

// // Route for testing random entries
// // Size - Thorp
// app.get("/thorp", function(req, res) {
//   db.aggregate([
//     { $sample: { size: 1 } }
//   ]).then(function(data) {
//     res.json(data);
//   })
//   .catch(function(err) {
//     res.json(err);
//   })
// });

// // Size - Hamlet
// app.get("/hamlet", function(req, res) {
//   db.aggregate([
//     { $sample: { size: 2 } }
//   ]).then(function(data) {
//     res.json(data);
//   })
//   .catch(function(err) {
//     res.json(err);
//   })
// });

// // Size - Village
// app.get("/village", function(req, res) {
//   db.aggregate([
//     { $sample: { size: 4 } }
//   ]).then(function(data) {
//     res.json(data);
//   })
//   .catch(function(err) {
//     res.json(err);
//   })
// });

// // Size - Small Town
// app.get("/smalltown", function(req, res) {
//   db.aggregate([
//     { $sample: { size: 8 } }
//   ]).then(function(data) {
//     res.json(data);
//   })
//   .catch(function(err) {
//     res.json(err);
//   })
// });

// // Size - Large Town
// app.get("/largetown", function(req, res) {
//   db.aggregate([
//     { $sample: { size: 10 } }
//   ]).then(function(data) {
//     res.json(data);
//   })
//   .catch(function(err) {
//     res.json(err);
//   })
// });

// // Size - Small City
// app.get("/smallcity", function(req, res) {
//   db.aggregate([
//     { $sample: { size: 12 } }
//   ]).then(function(data) {
//     res.json(data);
//   })
//   .catch(function(err) {
//     res.json(err);
//   })
// });

// // Size - Large City
// app.get("/largecity", function(req, res) {
//   db.aggregate([
//     { $sample: { size: 14 } }
//   ]).then(function(data) {
//     res.json(data);
//   })
//   .catch(function(err) {
//     res.json(err);
//   })
// });

// // Size - Metropolis
// app.get("/metropolis", function(req, res) {
//   db.aggregate([
//     { $sample: { size: 16 } }
//   ]).then(function(data) {
//     res.json(data);
//   })
//   .catch(function(err) {
//     res.json(err);
//   })
// });

require("./routes/shoproutes")(app);

// Start the server
app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });