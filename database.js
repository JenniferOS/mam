var mongoose = require('mongoose');
/* var PlayerModel = require('./models/Player');
var TeamModel = require('./models/Team');
var LeagueModel = require('./models/League');
 */
/* mongoose.set('useFindAndModify', false); */

mongoose.connect('mongodb://localhost/mano-a-mano', {
    useNewUrlParser: true,
    useCreateIndex: true
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
    console.log("Connected");
});

