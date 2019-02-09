// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
// Require Magic Item Shop model
var db = require("../models/Item");

module.exports = function(app) {
    // Route for showing all items in the db
    // Using aggregate method to grab all items in random order
    // So that when pushed to the array it will be different every time
    app.get("/all", function(req, res) {
        db.aggregate([
            { $sample: { size: 1004 } }
            ]).then(function(data) {
                res.json(data);
            })
            .catch(function(err) {
                res.json(err);
            })
    });

    // Store
    app.get("/store", function(req, res) {
        db.aggregate([
        { $sample: { size: 250 } }
        ]).then(function(data) {
            res.json(data);
        })
        .catch(function(err) {
            res.json(err);
        })
    });
    
    // Size - Thorp
    app.get("/thorp", function(req, res) {
        db.aggregate([
        { $sample: { size: 1 } }
        ]).then(function(data) {
            res.json(data);
        })
        .catch(function(err) {
            res.json(err);
        })
    });
  
    // Size - Hamlet
    app.get("/hamlet", function(req, res) {
        db.aggregate([
            { $sample: { size: 2 } }
        ]).then(function(data) {
            res.json(data)
        })
        .catch(function(err) {
            res.json(err);
        })
    });

    // Size - Village
    app.get("/village", function(req, res) {
        db.aggregate([
            { $sample: { size: 4 } }
        ]).then(function(data) {
            res.json(data);
        })
        .catch(function(err) {
            res.json(err);
        })
    });

    // Size - Small Town
    app.get("/smalltown", function(req, res) {
        db.aggregate([
            { $sample: { size: 8 } }
        ]).then(function(data) {
            res.json(data);
        })
        .catch(function(err) {
            res.json(err);
        })
    });

    // Size - Large Town
    app.get("/largetown", function(req, res) {
        db.aggregate([
            {
            // Example of match filtering
            // { $match: { type: "Scroll" } },
            // { $sample: { size: 10 } }

            $sample: { size: 10 }
            }
        ]).then(function(data) {
            res.json(data);
        })
        .catch(function(err) {
            res.json(err);
        })
    });

    // Size - Small City
    app.get("/smallcity", function(req, res) {
        db.aggregate([
            { $sample: { size: 12 } }
        ]).then(function(data) {
            res.json(data);
        })
        .catch(function(err) {
            res.json(err);
        })
    });

    // Size - Large City
    app.get("/largecity", function(req, res) {
        db.aggregate([
            { $sample: { size: 14 } }
        ]).then(function(data) {
            res.json(data);
        })
        .catch(function(err) {
            res.json(err);
        })
    });

    // Size - Metropolis
    app.get("/metropolis", function(req, res) {
        db.aggregate([
            { $sample: { size: 16 } }
        ]).then(function(data) {
            res.json(data);
        })
        .catch(function(err) {
            res.json(err);
        })
    });  
}