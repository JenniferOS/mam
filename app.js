/* MAM Web server */
// Modules
var express = require('express');
var morgan = require('morgan');
var session = require('express-session');

//init. express
var app = express();

/* EXPRESS SETUP */
app.use(morgan("combined"));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret: 'mamapp',
    resave: true,
    saveUninitialized: true
}));


/* ROUTES */
app.use(require('./routes/index'));

/* Starting server */
app.listen(3000, () => {
    console.log("MAM is runing");
});