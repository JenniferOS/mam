/* Rutas del servidor, enrutador principal */
var express = require('express');
var router = express.Router();

//models
var League = require('../models/League');

// tiene un /users/ruta users por el archivo users.js
router.get('/tracking/accounts', async(req, res) => {
    var leagues = await League.find({});
    console.log(leagues);
    res.render('accounts', {leagues: leagues});
});

router.get('/tracking/collab', (req, res) => {
    res.render('collab');
});

router.get('/tracking/test', (req, res) => {
    res.render('test');
});

router.get('/tracking/validate', (req, res) => {
    res.send('Agregado a la base correctamente');
});

/* app.post("/tracking/collab/submit", function (req, res) {
    var query = req.body.summoner;
    res.redirect("/tracking/collab");
    //console.log(config.apiKey);
}); */

module.exports = router;