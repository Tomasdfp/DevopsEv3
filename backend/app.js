const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Endpoint de salud - verifica que el Backend esté vivo
app.get('/api/health', (req, res) => {
    res.json({
        status: 'Backend OK',
        service: 'EP3',
        timestamp: new Date().toISOString()
    });
});

// Endpoint de datos - devuelve información para el Frontend
app.get('/api/data', (req, res) => {
    res.json({
        message: 'Hello from Backend!',
        timestamp: new Date().toISOString(),
        server: 'ECS Fargate',
        version: '1.0.0'
    });
});

// Manejar rutas no encontradas
app.use((req, res) => {
    res.status(404).json({
        error: 'Not Found',
        path: req.path
    });
});

app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
});
