/* Rutas del servidor, enrutador principal */
var express = require('express');
var router = express.Router();

// tiene un /users/ruta users por el archivo users.js
router.get('/tracking/accounts', (req, res) => {
    res.send('Iniciando Sesión');
});

router.get('/tracking/collab', (req, res) => {
    res.render('collab');
});

/* app.post("/tracking/collab/submit", function (req, res) {
    var query = req.body.summoner;
    res.redirect("/tracking/collab");
    //console.log(config.apiKey);
}); */

module.exports = router;