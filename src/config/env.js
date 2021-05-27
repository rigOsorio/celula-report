import dotenv from "dotenv";
dotenv.config();

const envConfig = {
  PORT: process.env.PORT || 3000,
  DB_IP: process.env.DB_IP || 'localhost',
  DB_NAME: process.env.DB_NAME || 'notes-db-app',
  DB_USER: process.env.DB_USER || 'root',
  DB_PASSWORD: process.env.DB_PASSWORD || 'root',
};

export default envConfig;
