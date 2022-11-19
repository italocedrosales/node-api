import * as dotenv from 'dotenv';
import express from 'express';
import swaggerUi from 'swagger-ui-express';
dotenv.config();

import swaggerFile from './swagger.json';

import { router } from './routes';

const port = process.env.PORT || 3333;
const app = express();

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
