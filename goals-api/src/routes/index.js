/**
 * arquivo: index.js
 * descricao: arquivo responsavel pela chamada API na aplicacao
 * data: 28/10/2020
 */

const express = require('express');
const router = express.Router();


router.get('/api', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'Seja bem vindo(a) a API',
    version: '1.0.0'
  });
});

module.exports = router;

