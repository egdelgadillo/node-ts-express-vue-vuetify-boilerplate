import { env } from './env';
import express from 'express';
import './db';

const app = express();
const PORT = env.PORT;

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'API is running' });
});

app.listen(PORT, () => {
  console.info(`Server is running on http://localhost:${PORT}`);
});
