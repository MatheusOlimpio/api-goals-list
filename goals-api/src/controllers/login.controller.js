/**
 * arquivo: controller/login.controller.js
 * descricao: arquivo responsavel pela logica de autenticacao/login usuario - 'Login'
 * data: 21/11/2020
 */
const db = require('../config/database');
const jwt = require('jsonwebtoken');

exports.autenticacaoUsuario =  async(req, res) => {
  const { username, password } = req.body;

  const user = await db('users').column('id', 'name', 'username', 'email').where({ username: username, password: password });

  if(!user || user.length === 0) {
    return res.status(401).send( { message: 'User is not Authorized' })
  }

  const token = jwt.sign({user: user}, process.env.SECRET, {expiresIn: '1h'});

  return res.status(200).send({ message: 'User authorized', user, token});
};