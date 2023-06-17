import UserController from '#/controllers/user.controller';
import { Express } from 'express';

const init = (app: Express) => {
  app.get('/users', UserController.find);
  app.post('/users', UserController.create);
  app.get('/users/:id', UserController.findOne);
  app.put('/users/:id', UserController.update);
  app.delete('/users/:id', UserController.remove);
};

const userRouter = { init };
export default userRouter;
