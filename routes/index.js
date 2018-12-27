/* Rutas del servidor, enrutador principal */
var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.send('TCP Index');
});

module.exports = router;