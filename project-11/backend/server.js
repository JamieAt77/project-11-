import express from 'express';
import itemsRouter from './routes/items.js';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.use('/api', itemsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
