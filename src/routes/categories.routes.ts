import { Request, Response, Router } from 'express';
import { z } from 'zod';

import { CategoriesRepository } from '../repositories/CategoriesRepository';
import { CreateCategoryService } from '../services/CreateCategoryService';

const categoriesRoutes = Router();

const categoriesRepository = new CategoriesRepository();
const createCategoryService = new CreateCategoryService(categoriesRepository);

categoriesRoutes.get('/', (request: Request, response: Response) => {
  const categories = categoriesRepository.list();

  return response.status(200).json(categories);
});

categoriesRoutes.post('/', (request: Request, response: Response) => {
  const categorySchema = z.object({
    name: z.string(),
    description: z.string(),
  });

  const { name, description } = categorySchema.parse(request.body);

  createCategoryService.execute({ name, description });

  return response.status(201).send();
});
export { categoriesRoutes };
