import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class VocabularyHttpService {

  constructor(private http: HttpClient) { }

  getAllVocabularyCategories() {
    return this.http.get('/api/vocabulary-category');
  }
}
