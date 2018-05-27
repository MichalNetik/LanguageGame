import { WordPairInterface, WordPairModel } from './word-pair.model';

export interface VocabularyCategoryInterface {
  id: number;
  name: string;
  description: string;

}

export class VocabularyCategoryModel implements VocabularyCategoryInterface {
  id: number;
  name: string;
  description: string;


  constructor(data: VocabularyCategoryInterface) {
    this.id = data.id;
    this.name = data.name;
    this.description = data.description;

  }
};
