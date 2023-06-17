import app from '#/app';
import mongoose from 'mongoose';
const port = 3000;

mongoose.connect('mongodb://127.0.0.1:27017/myapp');

app.listen(port, () => {
  console.log(`Servidor iniciado em http://localhost:${port}`);
});
