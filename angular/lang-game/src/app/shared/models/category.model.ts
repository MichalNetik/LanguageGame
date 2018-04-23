import { WordPairInterface, WordPairModel } from './word-pair.model';

export interface CategoryInterface {
  id: number;
  name: string;
  description: string;

}

export class CategoryModel implements CategoryInterface {
  id: number;
  name: string;
  description: string;


  constructor(data: CategoryInterface) {
    this.id = data.id;
    this.name = data.name;
    this.description = data.description;

  }
}