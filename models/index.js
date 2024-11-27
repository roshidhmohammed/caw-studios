const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT || "postgres",
  }
);

// Sync the database with the models
sequelize
  .sync({ force: false })
  .then(() => console.log("Database synchronized"))
  .catch((err) => console.error("Error syncing database:"));

module.exports = sequelize;
