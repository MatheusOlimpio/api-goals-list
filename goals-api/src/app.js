/**
 * arquivo: app.js
 * descricao: arquivo responsavel por fazer a conexao com o arquivo server.js
 * data: 28/10/2020
 */

 const express = require('express');
 const cors = require('cors');
 
 const app = express();

 // ==> Rotas da API (GOALS)
 const index = require('./routes/index');
//  const goalsRoute = require('./routes/goal.routes');

 app.use(express.urlencoded({ extended: true }));
 app.use(express.json());
 app.use(express.json({ type: 'application/vnd.api+json' }));
 app.use(cors());

 app.use(index);


 module.exports = app;