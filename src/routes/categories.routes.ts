import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '../utils/upload';

import { createCategoryController } from '../modules/cars/usecases/createCategory';
import { importCategoryController } from '../modules/cars/usecases/importCategory';
import { listCategoriesController } from '../modules/cars/usecases/listCategories';

const categoriesRoutes = Router();

const upload = multer(uploadConfig);

categoriesRoutes.get('/', (request, response) => {
  return listCategoriesController.handle(request, response);
});

categoriesRoutes.post('/', (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.post('/import', upload.single('file'), (request, response) => {
  return importCategoryController.handle(request, response);
});

export { categoriesRoutes };
