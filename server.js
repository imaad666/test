import express from 'express';
import { testController } from './controllers/testController.js';

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/test', testController);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
