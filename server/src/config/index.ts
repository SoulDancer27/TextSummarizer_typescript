/**
 * Stores all important environment variabes and config options.
 * @packageDocumentation
 */
import dotenv from 'dotenv';

const envFound = dotenv.config();

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (!envFound) {
  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

export default {
  env: process.env.NODE_ENV,

  // Port server listens to
  port: parseInt(process.env.PORT, 10),

  // Prefix for express routes. Every route despite webpages is /prefix/* .
  api: {
    prefix: '/api',
  },
};