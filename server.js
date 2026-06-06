import express from 'express';
import { validate } from './helper.js';

const app = express();
app.use(express.json());

const PORT = 3000;

// A simple route
app.get('/api/ping', (req, res) => {
  res.status(200).send('Pong');
});

// A route with validation example
app.post('/api/echo', (req, res) => {
  const { error, value } = validate(req.body);
  if (error) {
    res.status(400).send({ message: error });
  } else {
    res.send(value);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
