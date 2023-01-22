require("dotenv").config();

const {
  PORT = 3000,
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
} = process.env;

module.exports = {
  PORT,
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
};
