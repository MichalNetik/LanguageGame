import { PaginationUrlParamsModel, PaginationUrlParamsInterface } from './pagination-url-params.model';

export interface WordPairInterface {
    id: number;
    base: string;
    translated: string;
    description: string;
}

export class WordPairModel implements WordPairInterface {
    id: number;
    base: string;
    translated: string;
    description: string;

    constructor(data: WordPairInterface) {
        this.id = data.id;
        this.base = data.base;
        this.translated = data.translated;
        this.description = data.description;
    }
}

export interface WordPairPaginationInterface {
  data: WordPairInterface[];
  urlParams: PaginationUrlParamsInterface;
  totalRecords: number;
}

export class WordPairPaginationModel implements WordPairPaginationInterface {
  data: WordPairModel[];
  urlParams: PaginationUrlParamsModel;
  totalRecords: number;

  static getEmpty() {
    const emptyData = {
      data: [],
      urlParams: PaginationUrlParamsModel.getEmpty(),
      totalRecords: 0
    }

    return new this(emptyData);
  }

  constructor(data: WordPairPaginationInterface) {
     this.data = data.data.map(item => new WordPairModel(item));
     this.urlParams = new PaginationUrlParamsModel(data.urlParams);
     this.totalRecords = data.totalRecords;
  }

}

