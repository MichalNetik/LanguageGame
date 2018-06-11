import { PaginationUrlParamsModel, PaginationUrlParamsInterface } from './pagination-url-params.model';
import { VocabularyCategoryModel, VocabularyCategoryInterface } from './vocabulary-category.model';


export interface WordPairInterface {
    id: number;
    base: string;
    translated: string;
    description: string;
    category: VocabularyCategoryInterface;
}

export class WordPairModel implements WordPairInterface {
    id: number;
    base: string;
    translated: string;
    description: string;
    category: VocabularyCategoryModel;

    constructor(data: WordPairInterface) {
        this.id = data.id;
        this.base = data.base;
        this.translated = data.translated;
        this.description = data.description;
        this.category = new VocabularyCategoryModel(data.category);
    }
}

export interface WordPairPaginationInterface {
  data: WordPairInterface[];
  totalRecords: number;
}
