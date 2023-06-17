import express from 'express';
import router from './routers';
const app = express();
app.use(express.json());
router.init(app);
export default app;
