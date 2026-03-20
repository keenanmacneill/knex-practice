const path = require('path');
require('dotenv').config();

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    },
    migrations: {
      directory: path.join(process.cwd(), 'src/db/migrations'),
    },
    seeds: {
      directory: path.join(process.cwd(), 'src/db/seeds'),
    },
  },

  test: {
    client: 'postgresql',
    connection: {
      database: process.env.TEST_DB_NAME || 'test_db',
    },
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
  },
};
