export interface WordPairCategoryInterface {
  id: number;
  name: string;
  description: string;

}

export class WordPairCategoryModel implements WordPairCategoryInterface {
  id: number;
  name: string;
  description: string;

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
