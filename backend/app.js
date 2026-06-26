const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api/health', (req, res) => {
    res.json({ status: 'Backend OK', service: 'EP3' });
});

app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello from Backend!', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
});
