const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
res.send('Next Universe Server');
});

module.exports = router;

