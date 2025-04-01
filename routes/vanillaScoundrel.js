const express = require('express');
const router = express.Router();

// Handle GET request to /scoundrel
router.get('/', (req, res) => {
    res.send('This is the secondary view from routes/vanilla.js');
});

module.exports = router;
