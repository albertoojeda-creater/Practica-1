const logger = (req, res, next) => {
    const currentDateTime = new Date();
    console.log(`[${currentDateTime.toLocaleString()}] Ruta accesada: ${req.originalUrl}`);
    next(); // Pasar al siguiente middleware o ruta
};

const mensaje = (req, res, next) => {
    console.log('Ruta accesada: ');
    next(); // Pasar al siguiente middleware o ruta
};

module.exports = logger,mensaje;