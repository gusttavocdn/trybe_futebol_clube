import 'dotenv/config';
import { Options } from 'sequelize';

const config: Options = {
  username: process.env.PGUSER || 'root',
  password: process.env.PGPASSWORD || '123456',
  database: process.env.PGDATABASE || 'TRYBE_FUTEBOL_CLUBE',
  host: process.env.PGHOST || 'localhost',
  port: Number(process.env.PGPORT) || 3002,
  dialect: 'postgres',
  logging: false,
}

module.exports = config;
