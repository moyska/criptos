const express = require('express');
const { getGames, createGame, updateGame, deleteGame } = require('../controllers/gameController');
const router = express.Router();

router.get('/', getGames);      // Buscar todos os jogos
router.post('/', createGame);  // Criar um novo jogo
router.put('/:id', updateGame); // Atualizar um jogo
router.delete('/:id', deleteGame); // Deletar um jogo

module.exports = router;
