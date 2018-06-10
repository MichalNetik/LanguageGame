import { PaginationUrlParamsModel } from './../../shared/models/pagination-url-params.model';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromWordPairs from './store/word-pairs.reducers';
import * as WordPairsActions from './store/word-pairs.actions';

@Component({
  selector: 'app-vocabulary-word-pairs',
  templateUrl: './vocabulary-word-pairs.component.html',
  styleUrls: ['./vocabulary-word-pairs.component.scss']
})
export class VocabularyWordPairsComponent implements OnInit {
  urlParams: PaginationUrlParamsModel

  constructor(private store: Store<fromWordPairs.FeatureState>) { }

  ngOnInit() {
    this.store.select('wordPairsPagination')
      .subscribe(
        (data: fromWordPairs.State) => {
          this.urlParams = data.urlParams;
        }
      );
  }

  loadData() {
    this.store.dispatch(
      new WordPairsActions.FetchWordPairs(this.urlParams)
    );
  }

}
