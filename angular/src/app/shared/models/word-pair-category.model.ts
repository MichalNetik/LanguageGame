export interface WordPairCategoryInterface {
  id: number;
  name: string;
  description: string;
}

export class WordPairCategoryModel implements WordPairCategoryInterface {
  id: number;
  name: string;
  description: string;

  static getEmpty() {
    const emptyData = {
      id: null,
      name: '',
      description: ''
    }
    return new this(emptyData);
  }

  constructor(data: WordPairCategoryInterface) {
    this.id = data.id;
    this.name = data.name;
    this.description = data.description;
  }
};

export interface WordPairCategoryPaginationInterface {
  data: WordPairCategoryInterface[];
  totalRecords: number;
}
