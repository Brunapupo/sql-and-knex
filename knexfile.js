module.exports = {
  client: "mysql2",
  connection: {
    database: "base_de_dados",
    user: "usuario",
    password: "hipogrifo",
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: "knex_migrations",
  },
};
