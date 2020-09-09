/**
 * Initializes express endpoints starting with config prefix (currently /api).
 * @packageDocumentation
 */

import { Router } from 'express';
import text from './text';

export default (): Router => {
  const app = Router();
  text(app);
  return app;
};
