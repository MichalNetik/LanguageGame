import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WordPairPaginationInterface, WordPairModel, WordPairInterface } from '../models/word-pair.model';
import { PaginationUrlParamsModel } from '../models/pagination-url-params.model'
import { toHttpParams } from './vocabulary-http.utils'

@Injectable()
export class WordPairsHttpService {
  API_URL = '/api/word-pair';

  constructor(private http: HttpClient) { }

  getItems(params: PaginationUrlParamsModel | {} = {}) {
    const httpParams = toHttpParams(params);
    return this.http.get<WordPairPaginationInterface>(`${this.API_URL}/`,
      {
        params: httpParams
      }
    )
  }

  saveItem(wordPair: WordPairModel) {
    return this.http.post<WordPairInterface>(`${this.API_URL}/`, wordPair);
  }

  updateItem(wordPair: WordPairModel) {
    return this.http.put<WordPairInterface>(`${this.API_URL}/${wordPair.id}/`, wordPair);
  }

  deleteItem(wordPairId: number) {
    return this.http.delete(`${this.API_URL}/${wordPairId}/`);
  }
}
