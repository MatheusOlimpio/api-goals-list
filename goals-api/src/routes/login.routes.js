/**
 * arquivo: routes/login.routes.js
 * descricao: arquivo responsavel pelas rotas de 'Login'
 * data: 21/11/2020
 */

const router = require('express-promise-router')(); 
const loginController = require('../controllers/login.controller.js');

 router.post('/login/auth', loginController.autenticacaoUsuario);

 module.exports = router;