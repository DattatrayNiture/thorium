const express = require('express');
const router = express.Router();
let obj = require('./logger')
router.get('/test-me', function (req, res) {
    console.log(obj.url);
    obj.logg('thorium');
    res.send('My first ever api!')
});

module.exports = router;