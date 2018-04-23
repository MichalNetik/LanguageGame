import { Component, OnInit, OnDestroy } from '@angular/core';
import { VocabularyService } from '../shared/services/vocabulary.service';
import { CategoryModel } from '../shared/models/category.model';

@Component({
  selector: 'app-vocabulary',
  templateUrl: './vocabulary.component.html',
  styleUrls: ['./vocabulary.component.scss']
})
export class VocabularyComponent implements OnInit, OnDestroy {
  category: CategoryModel;
  categories: CategoryModel[];

  constructor(private vocabularyService: VocabularyService) { }

  ngOnInit() {
    this.category = new CategoryModel({ id: undefined, name: 'test name', description: 'test description' });
    this.vocabularyService.onGetAllCategories();

    this.vocabularyService.categoriesChanged
      .subscribe(
        (data: CategoryModel[]) => {
          this.categories = data;
        }
      )
  }

  saveWords() {
    this.vocabularyService.onCategorySave(this.category);
  }

  setActiveCategory(category: CategoryModel) {
    // need to clone this so reference isn't kept
    this.category = { ...category };
  }

  deleteCategory(category: CategoryModel) {
    this.vocabularyService.onCategoryDelete(category);
  }

  ngOnDestroy() {
    this.vocabularyService.onGetAllCategories().unsubscribe();
  }

}
