import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import * as fromWordPairs from '../store/word-pairs.reducers';
import * as WordPairsActions from '../store/word-pairs.actions';

@Component({
  selector: 'app-word-pairs-table',
  templateUrl: './word-pairs-table.component.html',
  styleUrls: ['./word-pairs-table.component.scss']
})
export class WordPairsTableComponent implements OnInit {
  wordPairsState: Observable<fromWordPairs.State>;
  columns: {name: string, displayName: string}[];

  constructor(private store: Store<fromWordPairs.FeatureState>) { }

  ngOnInit() {
    this.wordPairsState = this.store.select('wordPairsPagination');


    this.columns = [
      {
        name: 'base',
        displayName: 'Base'
      },
      {
        name: 'translated',
        displayName: 'Translated'
      },
      {
        name: 'description',
        displayName: 'Description'
      }
    ]
  }

  onNextPage() {
    this.store.dispatch(
      new WordPairsActions.NextPageWordPairs()
    )
  }

  onPreviousPage() {
    this.store.dispatch(
      new WordPairsActions.PreviousPageWordPairs()
    )
  }

  onFirstPage() {
    this.store.dispatch(
      new WordPairsActions.FirstPageWordPairs()
    )
  }

  onLastPage() {
    this.store.dispatch(
      new WordPairsActions.LastPageWordPairs()
    )
  }

  onSelectionChange(value: number) {
    this.store.dispatch(
      new WordPairsActions.SetPageSizeWordPairs(+value)
    );
  }
}
