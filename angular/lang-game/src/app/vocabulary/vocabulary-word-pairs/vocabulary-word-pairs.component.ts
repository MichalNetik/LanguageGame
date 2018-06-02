import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromWordPairs from './store/word-pairs.reducers';
import * as WordPairsActions from './store/word-pairs.actions';

@Component({
  selector: 'app-vocabulary-word-pairs',
  templateUrl: './vocabulary-word-pairs.component.html',
  styleUrls: ['./vocabulary-word-pairs.component.scss']
})
export class VocabularyWordPairsComponent implements OnInit {
  wordPairsState: Observable<fromWordPairs.State>;

  constructor(private store: Store<fromWordPairs.FeatureState>) { }

  ngOnInit() {
    this.wordPairsState = this.store.select('wordPairs');
    this.store.dispatch(new WordPairsActions.FetchWordPairs());
  }

}
