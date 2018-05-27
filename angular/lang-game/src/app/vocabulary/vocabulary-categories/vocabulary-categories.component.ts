import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { VocabularyCategoryModel } from '../../shared/models/vocabulary-category.model';
import * as fromVocabulary from '../store/vocabulary.reducers';
import * as VocabularyActions from '../store/vocabulary.actions';

@Component({
  selector: 'app-vocabulary-categories',
  templateUrl: './vocabulary-categories.component.html',
  styleUrls: ['./vocabulary-categories.component.scss']
})
export class VocabularyCategoriesComponent implements OnInit {
  categoriesState: Observable<fromVocabulary.State>;

  constructor(private store: Store<fromVocabulary.FeatureState>) { }

  ngOnInit() {
    this.categoriesState = this.store.select('vocabulary');
    this.store.dispatch(new VocabularyActions.FetchCategories());
  }

}
