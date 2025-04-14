const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, '../404.html'));
});

app.listen(port, () => {
    console.log(`Serveris paleistas adresu http://localhost:${port}`);
});

