/**
 * arquivo: routes/goal.routes.js
 * descricao: arquivo responsavel pelas rotas 'Goals'
 * data: 28/10/2020
 */

 const router = require('express-promise-router')();
 const goalController = require('../controllers/goal.controller');


 // => Definindo Rotas do CRUD - 'Metas'

//  // => Rota para visualizar as 'Metas': (GET): localhost:3000/api/goals


 // => Rota para cadastrar uma 'Meta': (POST): localhost:3000/api/goals
router.post('/goals', goalController.createGoal);
//  // => Rota para editar uma 'Meta': (PUT): localhost:3000/api/goals

//  // => Rota para excluir uma 'Meta': (DELETE): localhost:3000/api/goals



module.exports = router;