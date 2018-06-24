import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { WordPairCategoryPaginationInterface } from './../models/word-pair-category.model';
import { WordPairPaginationInterface } from './../models/word-pair.model';
import { PaginationUrlParamsModel } from './../models/pagination-url-params.model'

@Injectable()
export class VocabularyHttpService {

  constructor(private http: HttpClient) { }

  private toHttpParams(params: PaginationUrlParamsModel | {}): HttpParams {
    return Object.getOwnPropertyNames(params)
        .reduce((p, key) => p.set(key, params[key]), new HttpParams());
  }

  getWordPairCategories(params: PaginationUrlParamsModel | {} = {}) {
    const httpParams = this.toHttpParams(params);
    return this.http.get<WordPairCategoryPaginationInterface>('/api/vocabulary-category',
      {
        params: httpParams
      }
    );
  }

  getWordPairs(params: PaginationUrlParamsModel | {} = {}) {
    const httpParams = this.toHttpParams(params);
    return this.http.get<WordPairPaginationInterface>('/api/word-pair',
      {
        params: httpParams
      }
    )
  }
}
