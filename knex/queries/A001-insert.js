const knex = require("../../knex/config/database");

const data = [
  {
    first_name: "Joana",
    last_name: "B.",
    email: "2@email.com",
    password_hash: "4_hash",
    salary: 12335.22,
  },
  {
    first_name: "Rosana",
    last_name: "C.",
    email: "3@email.com",
    password_hash: "5_hash",
    salary: 6456.123,
  },
];

//gera um consulta na base de dados SELECT * FROM ...
const insert = knex("users").insert(data);
