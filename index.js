const express = require("express");
const app=express();
const port=process.env.PORT || 3000;
const ruta1 = require('./rutas/ruta1');
const ruta2 = require('./rutas/ruta2');
const logger = require('./middlewares/middleware');
const mensaje = require('./middlewares/middleware');

// Usar el middleware
//app.use(logger);

// Usar las rutas
app.use('/', logger, mensaje, ruta1);
app.use('/ruta2', logger, mensaje, ruta2);

app.listen(port,()=>{
    console.log("Servidor en http://localhost:"+port);
});