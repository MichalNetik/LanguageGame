import { Injectable } from '@angular/core';
import { CategoryModel, CategoryInterface } from '../models/category.model';
import { VocabularyHttpService } from './vocabulary-http.service';
import { Subject } from 'rxjs/Subject';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class VocabularyService {
  categories: CategoryModel[];
  categoriesChanged = new Subject<CategoryModel[]>();

  constructor(private vocabularyHttp: VocabularyHttpService) { }

  onCategorySave(data: CategoryModel) {
    return this.vocabularyHttp.saveCategory(data)
      .subscribe(
        status => {
          console.log('We saved stuff: ', status);
          this.onGetAllCategories();
        },
        (err: HttpErrorResponse) => {
          if (err instanceof Error) {
            console.log('Error occured while saving category: ', err);
          }
        }
      )
  }

  onCategoryDelete(data: CategoryModel) {
    return this.vocabularyHttp.removeCategory(data)
      .subscribe(
        status => {
          console.log('deleted this: ', data, ' with this status: ', status);
          this.onGetAllCategories();
        },
        (err: HttpErrorResponse) => {
          if (err instanceof Error) {
            console.log('Error occured while deletion of category: ', err);
          }
        }
      )
  }

  onGetAllCategories() {
    return this.vocabularyHttp.getAllCategories()
      .subscribe(
        (data: CategoryModel[]) => {
          const newCategories = Object.keys(data).map(key => data[key]);
          this.categoriesChanged.next([...newCategories]);
        },
        (err: HttpErrorResponse) => {
          if (err instanceof Error) {
            console.log('Error occured while retrieving category: ', err);
          }
        }
      )
  }

}
