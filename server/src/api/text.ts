/**
 * Routes for text submitting
 * @packageDocumentation
 */
import { Router, Request, Response } from 'express';

const route: Router = Router();

/** API endpoints for api/files/* */
export default (app: Router): void => {
  app.use('/text', route);

  route.post('/submit', (req: Request, res: Response) =>{
    res.status(200).json("Received!").end();
  });
};
