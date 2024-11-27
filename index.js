const app = require("./app");
const sequelize = require("./config/db");

process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`shutting down the server for uncaught exception`);
});

sequelize
  .authenticate()
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.error("Database connection was failed:", err));

const server = app.listen(8000, (req, res, next) => {
  console.log("Server running at port 8000");
});

process.on("unhandledRejection", (err) => {
  console.log(`shutting down the server for ${err.message}`);
  console.log(`shutting down the server for unhandled promise rejection`);
  server.close(() => {
    process.exit(1);
  });
});
