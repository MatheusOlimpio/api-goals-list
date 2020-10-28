/**
 * arquivo: server.js
 * descricao: arquivo responsavel por toda a configuracao e execucao do backend
 * data: 28/10/2020
 */

 const app = require('./src/app');

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Aplicacao sendo executada na porta..:', port);
});