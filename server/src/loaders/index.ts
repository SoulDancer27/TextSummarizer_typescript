/**
 * Calls async loaders: 
 * express.ts - initializes api endpoints and middlewares 
 * mongo.ts - connects to mongo database 
 * mysql.ts - creates connection pool for mysql database 
 * @packageDocumentation
 */
import express from 'express';
import expressLoader from './express';

import { ConsoleLogger } from 'helpers/logger';

export default async (app: express.Application): Promise<void> => {
  expressLoader(app);
  ConsoleLogger.info('✌️ Express loaded!');
};
