/**
 * arquivo: routes/goal.routes.js
 * descricao: arquivo responsavel pelas rotas 'Goals'
 * data: 28/10/2020
 */

 const router = require('express-promise-router')();
 const goalController = require('../controllers/goal.controller');


 // => Definindo Rotas do CRUD - 'Metas'

//  // => Rota para visualizar as 'Goals' do usuario: (GET): localhost:3000/api/goals
router.get('/goals', goalController.listAllGoals);

 // => Rota para cadastrar uma 'Goal': (POST): localhost:3000/api/goals
router.post('/goals', goalController.createGoal);
//  // => Rota para editar uma 'Goal': (PUT): localhost:3000/api/goals

//  // => Rota para excluir uma 'Goal': (DELETE): localhost:3000/api/goals



module.exports = router;