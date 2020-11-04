/**
 * arquivo: config/database.js
 * descricao: arquivo responsavel por fazer a conexao com o banco de dados mysql
 * data: 28/10/2020
 */
require('dotenv').config();
var knex = require('knex')({
    client: 'mysql',
    connection: {
        host: process.env.DATABASE_HOST,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASS,
        database: process.env.DATABASE_DB,
        port: 3306
    },
    pool: {
      afterCreate: (conn, done) => {
        console.log("Conectamos ao banco de dados local");
        done(false, conn);
    },
    log: {
      warn(message) {
          console.log('Warning: ', message)
      },
      error(message) {
          console.log('Error: ', message);
      },
      deprecate(message) {
          console.log('Deprecate: ', meesage);
      },
      debug(message) {
          console.log('Debug: ', message)
      },
    }    
  },
})

// const b = knex.select().from("goals").then(data => console.log("B Success", data)).catch(err => console.log("B Error", err));

module.exports = knex;