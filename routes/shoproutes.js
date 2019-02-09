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
}