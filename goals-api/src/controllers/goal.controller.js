/**
 * arquivo: controller/goal.controller.js
 * descricao: arquivo responsavel pela logica do CRUD API - 'Goals'
 * data: 03/11/2020
 */

const db = require("../config/database");

// =>  Metodo responsavel por criar uma nova 'Goal'
exports.createGoal = async (req, res) => {
  console.log(req.body);
  const { goal, init_date, final_date, id_user } = req.body;
  const current_date = new Date(); 
  const goal_registration = `${current_date.getFullYear()}-${current_date.getMonth()}-${current_date.getDay()}`;
  await db('goals').insert({goal, init_date, final_date, id_user, goal_registration}).then(function (result) {
    res.status(201).send({ 
      message: 'Goal added success',
      body: {
        goal: { goal, init_date, final_date, id_user }
      },
    });     // respond back to request
  })
};

// =>  Metodo responsavel por listar as 'Goals'
exports.listAllGoals = async (req, res) => {
  const { id_user } = req.body;

  await db('goals').where({id_user}).then(goals => {
    res.status(200).send(goals);     // respond back to request
  }).catch(error => {
    console.log(error);
  });
}

// =>  Metodo responsavel por listar uma 'Goal'
exports.listGoalById =  async (req, res) => {
  const id_goal  = parseInt(req.params.id);
  const id_user = req.body.id_user;

  await db('goals').where({id_goal: id_goal, id_user: id_user}).then(goal => {
    res.status(200).send(goal); 
  }).catch(error => {
    console.log(error);
  })
}

// =>  Metodo responsavel por atualizar uma 'Goal'
exports.updateGoal = async (req, res) => {
  const goalId = req.params.id;
  const { goal, init_date, final_date } = req.body;

  await db('goals').where({id_goal: goalId}).update({
    goal,
    init_date,
    final_date
  }).then(result => {
    res.status(200).send({ message: 'Goal Updated Successfully !' })
  }).catch(error => {
    res.status(500).send({ message: 'Error - Goal not updated' })
  });
}