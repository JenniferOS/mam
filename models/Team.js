var mongoose = require('mongoose');
var { Schema } = mongoose;
var League = mongoose.model('League');

var TeamSchema = new Schema({
    team: {
        type: String,
        required: true
    },
    acronym: {
        type: String,
        required: true
    },
    league: {
        type: Schema.ObjectId,
        ref: "League",
        required: true
    }
});

module.exports = mongoose.model('Team', TeamSchema);