/**
 * This is server entry point.
 * @packageDocumentation
 */
import 'module-alias/register';
import express from 'express';

import config from 'config';
import { ConsoleLogger } from 'helpers/logger';

import loader from './loaders';
/**
 * Initializes server listening on config.port and awaits for async loaders see ./loaders for information.
 */
async function startServer() {
  const app: express.Application = express();

  await loader(app);

  app.listen(config.port, () => {
    ConsoleLogger.info(`
      ################################################
      🛡️  Server listening on port: ${config.port} 🛡️ 
      ################################################
    `);
  });
}
startServer();
