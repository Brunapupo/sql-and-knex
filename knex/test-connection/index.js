const knex = require("../config/database");

//Passo a tabela
// knex("users").then((data) => {
//   console.log(data);
// });

//vai executar, fazer o destroi a conexão e desconectar da base de dados
knex("users")
  .then((data) => {})
  .catch((e) => {})
  .finally(() => {
    knex.destroy();
  });
