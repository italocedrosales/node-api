import * as dotenv from 'dotenv';
import express from 'express';
dotenv.config();

import { router } from './routes';

const port = process.env.PORT || 3333;
const app = express();

app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
