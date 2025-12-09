import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Get the directory of the current file
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables from .env file in project root
// .env file is at project root, which is 3 levels up from api/src/env.ts
dotenv.config({ path: join(__dirname, '../../.env') });

export const env = {
  // Server
  PORT: parseInt(process.env.PORT!, 10),
  NODE_ENV: process.env.NODE_ENV!,

  // Database
  DB_HOST: process.env.DB_HOST!,
  DB_PORT: parseInt(process.env.DB_PORT!, 10),
  DB_NAME: process.env.DB_NAME!,
  DB_USER: process.env.DB_USER!,
  DB_PASSWORD: process.env.DB_PASSWORD!,
  DB_SSL: process.env.DB_SSL === 'true',
} as const;

export type Env = typeof env;

// Required environment variables
const requiredEnvVars: (keyof Env)[] = [
  'NODE_ENV',
  'PORT',
  'DB_HOST',
  'DB_PORT',
  'DB_NAME',
  'DB_USER',
  'DB_PASSWORD',
];

// Validate required environment variables
const missingVars: string[] = [];
for (const varName of requiredEnvVars) {
  const value = process.env[varName];

  if (!value) missingVars.push(varName);
}

if (missingVars.length > 0) {
  throw new Error(
    `Missing required environment variables: ${missingVars.join(', ')}`
  );
}
