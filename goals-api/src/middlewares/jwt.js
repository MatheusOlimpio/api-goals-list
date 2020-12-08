/**
 * arquivo: middlewares/jwt.js
 * descricao: arquivo responsavel pela configuracao do jwt
 * data: 07/12/2020
 */

require('dotenv').config();
const expressJwt = require('express-jwt');

module.exports = jwt;

function jwt() {
  const secret = process.env.SECRET;

  return expressJwt({secret, algorithms: ['HS256']}).unless({
    path: [
      // rotas public que nao precisam de autenticacao
      '/api/login/auth'
    ]
  });
}