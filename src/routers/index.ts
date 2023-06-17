import userRouter from './user.router';
import { Express } from 'express';

const init = (app: Express) => {
  userRouter.init(app);
};
const router = { init };
export default router;
