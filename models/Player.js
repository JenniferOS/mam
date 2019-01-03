const mongoose = require('mongoose');
const { Schema } = mongoose;
var ObjectId = Schema.ObjectId;
var Team = mongoose.model('Team');

var PlayerSchema = new mongoose.Schema({
    player: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    team: { 
        type: ObjectId, 
        ref: "Team",
        required: true
    },
    region: {
        type: String,
        required: true
    },
    account: {
        type: String
    }
});

module.exports = mongoose.model('Player', PlayerSchema);