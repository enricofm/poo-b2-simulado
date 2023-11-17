const express = require('express');
const lanceController = require('./lanceController');

const router = express.Router();

router.get('/lance', lanceController.getAllLances);

module.exports = router;
