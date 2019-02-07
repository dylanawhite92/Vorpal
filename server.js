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

// Home route
app.get("/", function(req, res) {
    res.send("index.html");
});

// Routes for querying the database
require("./routes/shoproutes")(app);

// Start the server
app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });