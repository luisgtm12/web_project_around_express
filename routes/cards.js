const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();
const cardController = require('../controllers/card');

router.get('/', cardController.getAllCards);
router.post('/', cardController.createCard);
router.delete('/:cardId', cardController.deleteCardById);

module.exports = router;

/*const filePath = path.join(__dirname ,'..' ,'data' ,'cards.json');

router.get('/', (req, res) =>{

  fs.readFile(filePath, 'utf8', (error, data) => {
    if (error) {
      console.error(error);
      res.status(500).json({ message: 'Error interno del servidor' });
      return;
    }

    // Parseando los datos JSON
    const cards = JSON.parse(data);
    // Envía la lista de tarjetas como respuesta
    res.json(cards);
  });
});

*/