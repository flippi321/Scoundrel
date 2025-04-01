const express = require('express');

const app = express();
const PORT = 3000;
const scoundrelRouter = require('./routes/vanillaScoundrel');

// Basic Hello world view
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// If the user is at /scoundrel, send them view from routes/vanilla.js
app.use('/scoundrel', scoundrelRouter);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});