var mongoose = require("mongoose");

// Saves reference to the Schema constructor
var Schema = mongoose.Schema;

var ItemSchema = new Schema({
    item_name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    attunement: {
        type: Boolean,
        required: true
    },
    rarity: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true  
    },
    location: {
        type: String,
        required: true
    }
});

var Item = mongoose.model("Item", ItemSchema);

module.exports = Item;