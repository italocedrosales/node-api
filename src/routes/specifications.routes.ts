import { Request, Response, Router } from 'express';
import { createSpecificationController } from '../modules/cars/usecases/createSpecification/indext';

const specificationsRoutes = Router();

specificationsRoutes.get('/', (request: Request, response: Response) => {
  return response.status(200).send();
});

specificationsRoutes.post('/', (request, response) => {
  return createSpecificationController.handle(request, response);
});

export { specificationsRoutes };
