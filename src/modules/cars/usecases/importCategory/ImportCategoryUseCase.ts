/* eslint-disable @typescript-eslint/ban-ts-comment */
import csvParse from 'csv-parse';
import fs from 'fs';

import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

class ImportCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute(file: Express.Multer.File | undefined): void {
    const stream = fs.createReadStream(file?.path as string);

    // @ts-ignore
    const parseFile = csvParse();

    stream.pipe(parseFile);

    //@ts-ignore
    parseFile.on('data', async (line) => {
      const [name, description] = line;
      this.categoriesRepository.create({ name, description });
    });

    console.log('service', file);
  }
}

export { ImportCategoryUseCase };
