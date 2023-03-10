require("dotenv").config();

const {
  PORT = 3001,
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  SECRET_KEY,
} = process.env;

module.exports = {
  PORT,
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  SECRET_KEY,
};
