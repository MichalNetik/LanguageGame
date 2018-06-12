import { PaginationUrlParamsModel } from './../../shared/models/pagination-url-params.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromWordPairs from './store/word-pairs.reducers';
import * as fromCategories from '../vocabulary-categories/store/vocabulary-categories.reducers';
import * as WordPairsActions from './store/word-pairs.actions';
import * as CategoriesActions from '../vocabulary-categories/store/vocabulary-categories.actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-vocabulary-word-pairs',
  templateUrl: './vocabulary-word-pairs.component.html',
  styleUrls: ['./vocabulary-word-pairs.component.scss']
})
export class VocabularyWordPairsComponent implements OnInit, OnDestroy {
  urlParams: PaginationUrlParamsModel;
  categoriesState: Observable<fromCategories.State>;
  subscription: Subscription;

  constructor(
    private wordPairsStore: Store<fromWordPairs.FeatureState>,
    private categoriesStore: Store<fromCategories.FeatureState>
  ) { }

  ngOnInit() {
    this.subscription = this.wordPairsStore.select('wordPairsPagination')
      .subscribe(
        (data: fromWordPairs.State) => {
          this.urlParams = data.urlParams;
        }
      );

    this.categoriesState = this.categoriesStore.select('categories')

    this.categoriesStore.dispatch(
      new CategoriesActions.FetchCategories()
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  loadData() {
    this.wordPairsStore.dispatch(
      new WordPairsActions.FetchWordPairs(this.urlParams)
    );
  }

  onCategorySelectionChange(categoryId: string) {
    this.wordPairsStore.dispatch(
      new WordPairsActions.SetFilter(
        { filterColumn: 'category', filterValue: categoryId }
      )
    )
  }

}
