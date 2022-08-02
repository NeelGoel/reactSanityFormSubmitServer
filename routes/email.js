const express = require('express');
const router = express.Router();

router.get("/", async(req, res) => {
    try{
        res.send('hello')
    }
    catch(error) {
    console.error(error);
    return res.status(500).send("server error");
    }
});

module.exports = router;