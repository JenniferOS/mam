var mongoose = require('mongoose');
var { Schema } = mongoose;

var LeagueSchema = new Schema({
    league: {
        type: String,
        required: true
    },
    acronym: {
        type: String,
        required: true
    },
    region: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('League', LeagueSchema, 'Leagues');