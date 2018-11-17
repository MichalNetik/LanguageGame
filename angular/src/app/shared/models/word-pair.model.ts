import { WordPairCategoryModel, WordPairCategoryInterface } from './word-pair-category.model';


export interface WordPairInterface {
    id: number;
    base: string;
    translated: string;
    description: string;
    category: WordPairCategoryInterface;
}

export class WordPairModel implements WordPairInterface {
    id: number;
    base: string;
    translated: string;
    description: string;
    category: WordPairCategoryModel;



    static getEmpty() {
      const emptyData: WordPairInterface = {
        id: null,
        base: '',
        translated: '',
        description: '',
        category: null
      }
      return new this(emptyData);
    }

    constructor(data: WordPairInterface) {
      this.id = data.id;
      this.base = data.base;
      this.translated = data.translated;
      this.description = data.description;
      this.category = data.category ?
        new WordPairCategoryModel(data.category) :
        null;
    }
}

export interface WordPairPaginationInterface {
  data: WordPairInterface[];
  totalRecords: number;
}
