/**
 * Winston Loggers are here.
 * @packageDocumentation
 */
import winston from 'winston';

import config from 'config';

/**
 * initializes logger instances.
 * ConsoleLogger - logs to console.
 */
const consoleTransport = [];
// 'production' transports not implemented yet
if (config.env === 'development') {
  consoleTransport.push(new winston.transports.Console());
}

/**
 * Is used for debug purposes and to set up a server.
 */
export const ConsoleLogger = winston.createLogger({
  level: 'debug',
  format: winston.format.combine(winston.format.timestamp(), winston.format.cli()),
  transports: consoleTransport,
});
