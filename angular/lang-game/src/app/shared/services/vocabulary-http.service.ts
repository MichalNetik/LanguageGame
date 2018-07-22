import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { WordPairCategoryPaginationInterface } from './../models/word-pair-category.model';
import { WordPairPaginationInterface, WordPairModel, WordPairInterface } from './../models/word-pair.model';
import { PaginationUrlParamsModel } from './../models/pagination-url-params.model'

@Injectable()
export class VocabularyHttpService {
  WORD_PAIR_URL = '/api/word-pair';
  WORD_PAIR_CATEGORY_URL = '/api/vocabulary-category';

  constructor(private http: HttpClient) { }

  private toHttpParams(params: PaginationUrlParamsModel | {}): HttpParams {
    return Object.getOwnPropertyNames(params)
        .reduce((p, key) => p.set(key, params[key]), new HttpParams());
  }

  getWordPairCategories(params: PaginationUrlParamsModel | {} = {}) {
    const httpParams = this.toHttpParams(params);
    return this.http.get<WordPairCategoryPaginationInterface>(`${this.WORD_PAIR_CATEGORY_URL}/`,
      {
        params: httpParams
      }
    );
  }

  getWordPairs(params: PaginationUrlParamsModel | {} = {}) {
    const httpParams = this.toHttpParams(params);
    return this.http.get<WordPairPaginationInterface>(`${this.WORD_PAIR_URL}/`,
      {
        params: httpParams
      }
    )
  }

  saveWordPair(wordPair: WordPairModel) {
    return this.http.post<WordPairInterface>(`${this.WORD_PAIR_URL}/`, wordPair);
  }

  updateWordPair(wordPair: WordPairModel) {
    return this.http.put<WordPairInterface>(`${this.WORD_PAIR_URL}/${wordPair.id}/`, wordPair);
  }

  deleteWordPair(wordPairId: number) {
    return this.http.delete(`${this.WORD_PAIR_URL}/${wordPairId}/`);
  }
}
