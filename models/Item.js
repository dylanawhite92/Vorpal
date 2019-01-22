var mongoose = require("mongoose");

// Saves reference to the Schema constructor
var Schema = mongoose.Schema;

var ItemSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
    },
    item_name: {
        type: String,
    },
    type: {
        type: String,
    },
    attunement: {
        type: Boolean,
    },
    rarity: {
        type: String,
    },
    description: {
        type: String,
    },
    location: {
        type: String,
    }
});

var Items = mongoose.model("shopgenerators", ItemSchema);

module.exports = Items;