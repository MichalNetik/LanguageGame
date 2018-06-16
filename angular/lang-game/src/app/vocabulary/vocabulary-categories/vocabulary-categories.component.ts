import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { VocabularyCategoryModel } from '../../shared/models/vocabulary-category.model';
import * as fromVocabularyCategories from './store/vocabulary-categories.reducers';
import * as VocabularyCategoriesActions from './store/vocabulary-categories.actions';

@Component({
  selector: 'app-vocabulary-categories',
  templateUrl: './vocabulary-categories.component.html',
  styleUrls: ['./vocabulary-categories.component.scss']
})
export class VocabularyCategoriesComponent implements OnInit {
  categoriesState: Observable<fromVocabularyCategories.State>;

  constructor(private store: Store<fromVocabularyCategories.FeatureState>) { }

  ngOnInit() {
    this.categoriesState = this.store.select('categories');
    this.store.dispatch(new VocabularyCategoriesActions.FetchCategories());
  }

}
