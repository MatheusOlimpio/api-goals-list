/**
 * arquivo: controller/login.controller.js
 * descricao: arquivo responsavel pela logica de autenticacao/login usuario - 'Login'
 * data: 21/11/2020
 */

const db = require('../config/database');

exports.autenticacaoUsuario =  async(req, res) => {
  const { username, password } = req.body;

  const user = await db('users').column('id', 'name', 'username', 'password').where({ username: username, password: password });

  if(!user || user.length === 0) {
    return res.status(401).send( { message: 'User is not Authorized' })
  }

  return res.status(200).send({ message: 'User authorized', user});
};