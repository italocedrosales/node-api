import { Request, Response } from 'express';
import { z } from 'zod';
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';

class CreateSpecificationController {
  constructor(private createSpecificationUseCase: CreateSpecificationUseCase) {}

  handle(request: Request, response: Response): Response {
    const specificationSchema = z.object({
      name: z.string(),
      description: z.string(),
    });

    const { name, description } = specificationSchema.parse(request.body);

    this.createSpecificationUseCase.execute({ name, description });

    return response.status(201).send();
  }
}

export { CreateSpecificationController };
