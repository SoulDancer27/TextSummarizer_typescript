/**
 * Initializes all api endpoints see: src/api/routes and global middlewares logger.ts errorHandler.ts, response.ts.
 * @packageDocumentation
 */
import bodyParser from 'body-parser';
import cors from 'cors';
import express, { Request, Response } from 'express';

import config from 'config';
import routes from '../api';

import { ConsoleLogger } from 'helpers/logger';
import { serveFrontend, frontendPath } from 'helpers/pageServers';

/**
 * Is used in ./index.ts to initialize api endpoints and set up universally used middlewares.
 * Middlewares: HttpResponse, Logger, errorHandler see src/helpers for more information.
 */
export default (app: express.Application): void => {
  //Health Check endpoints
  app.get('/status', (req: Request, res: Response) => {
    ConsoleLogger.info('Test request received');
    res.status(200).send('Request received').end();
  });
  app.head('/status', (req: Request, res: Response) => {
    ConsoleLogger.info('Test request received');
    res.status(200).send('Request received').end();
  });

  /** serving static web pages */
  app.use(express.static(frontendPath));
  ['/', '/main'].forEach((path) => app.get(path, serveFrontend));

  app.use(cors());

  app.use(bodyParser.json());

  app.use(config.api.prefix, routes());
};
