/**
 * Static page serving middlewares
 * @packageDocumentation
 */

import path from 'path';

import { Request, Response } from 'express';

/** entry point for the main website */
export const frontendPath: string = path.join(__dirname, '../../../', 'frontend', 'build');

/** Serves frontend */
export function serveFrontend(req: Request, res: Response): void {
  res.sendFile(path.join(frontendPath, 'index.html'));
}
