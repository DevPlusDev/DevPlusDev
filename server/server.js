const express = require('express');
const path = require('path');
const app = express();
app.use(express.json());

// Root
app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, './index.html'));
});

