import app from '../app';
import UserController from '../controllers/user.controller';

app.get('/users', UserController.find);
app.post('/users', UserController.create);
app.get('/users/:id', UserController.findOne);
app.put('/users/:id', UserController.update);
app.delete('/users/:id', UserController.remove);
