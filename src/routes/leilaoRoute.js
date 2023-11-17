const express = require('express');
const leilaoController = require('./leilaoController');

const router = express.Router();

router.get('/leilao', leilaoController.getLeilao);

module.exports = router;
