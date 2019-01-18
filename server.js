//Dependencies
var express = require("express");
var mongoose = require("mongoose");
var logger = require("morgan");

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

// Start the server
app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });