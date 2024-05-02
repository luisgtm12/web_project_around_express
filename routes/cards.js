const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();
const cardController = require('../controllers/card');

router.get('/', cardController.getAllCards);
router.post('/', cardController.createCard);
router.delete('/:cardId', cardController.deleteCardById);

module.exports = router;