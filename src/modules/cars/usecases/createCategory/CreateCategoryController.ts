import { Request, Response } from 'express';
import { z } from 'zod';

import { CreateCategoryUseCase } from './CreateCategoryUseCase';

class CreateCategoryController {
  constructor(private createCategoryUseCase: CreateCategoryUseCase) {}

  handle(request: Request, response: Response): Response {
    const categorySchema = z.object({
      name: z.string(),
      description: z.string(),
    });

    const { name, description } = categorySchema.parse(request.body);

    this.createCategoryUseCase.execute({ name, description });

    return response.status(201).send();
  }
}

export { CreateCategoryController };
