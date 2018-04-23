import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoryModel } from '../models/category.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class VocabularyHttpService {

  constructor(private http: HttpClient) { }

  saveCategory(data: CategoryModel) {
    return this.http.put(`https://kittens-21757.firebaseio.com/ourdata/${data.name}.json`, data);
  }

  getAllCategories() {
    return this.http.get(`https://kittens-21757.firebaseio.com/ourdata.json`);
  }

  removeCategory(data: CategoryModel) {
    return this.http.delete(`https://kittens-21757.firebaseio.com/ourdata/${data.name}.json`);
  }
}
