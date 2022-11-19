import * as dotenv from 'dotenv';
import express from 'express';
dotenv.config();

import { categoriesRoutes } from './routes/categories.routes';

const port = process.env.PORT || 3333;
const app = express();

app.use(express.json());

app.use('/categories', categoriesRoutes);

app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
