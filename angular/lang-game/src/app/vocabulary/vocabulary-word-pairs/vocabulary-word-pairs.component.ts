import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromWordPairs from './store/word-pairs.reducers';
import * as WordPairsActions from './store/word-pairs.actions';
import { WordPairPaginationModel } from './../../shared/models/word-pair.model';

@Component({
  selector: 'app-vocabulary-word-pairs',
  templateUrl: './vocabulary-word-pairs.component.html',
  styleUrls: ['./vocabulary-word-pairs.component.scss']
})
export class VocabularyWordPairsComponent implements OnInit {
  wordPairsPagination: WordPairPaginationModel;

  constructor(private store: Store<fromWordPairs.FeatureState>) { }

  ngOnInit() {
    this.store.select('wordPairsPagination')
      .subscribe(
        (data: fromWordPairs.State) => {
          this.wordPairsPagination = data.wordPairsPagination;
        }
      );
  }

  loadData() {
    this.store.dispatch(
      new WordPairsActions.FetchWordPairs(this.wordPairsPagination.urlParams)
    );
  }

}
