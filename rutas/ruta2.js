const express = require('express');
const ruta = express.Router();

ruta.get('/', (req, res) => {
    res.send('Estás en la ruta 2');
});

module.exports = ruta;