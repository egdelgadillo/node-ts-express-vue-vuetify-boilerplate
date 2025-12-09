import knex from 'knex';
import config from '../knexfile';
import { env } from './env';

const dbConfig = config[env.NODE_ENV as keyof typeof config];

if (!dbConfig) {
  throw new Error(
    `No database configuration found for environment: ${env.NODE_ENV}`
  );
}

export const db = knex(dbConfig);
