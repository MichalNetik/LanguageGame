import { WordPairPaginationInterface } from './../../../../shared/models/word-pair.model';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { switchMap, map, mergeMap, withLatestFrom, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { WordPairModel } from '../../../../shared/models/word-pair.model';
import * as WordPairsActions from './word-pairs.actions';
import * as fromLangTable from './word-pairs.reducers';
import { VocabularyHttpService } from '../../../../shared/services/vocabulary-http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class WordPairsEffects {

  @Effect()
  wordPairsFetch = this.actions$
    .ofType(WordPairsActions.FETCH_DATA)
    .pipe(
      switchMap(
        (action: WordPairsActions.FetchData) => {
          return this.httpVocabularyService.getWordPairs(action.payload);
        }
      ),
      mergeMap(
        (data: WordPairPaginationInterface) => {
          const tableData = data.data.map(item => new WordPairModel(item));
          const totalRecords = data.totalRecords;

          return [
            {
              type: WordPairsActions.SET_DATA,
              payload: tableData
            },
            {
              type: WordPairsActions.SET_TOTAL_RECORDS,
              payload: totalRecords
            }
          ]
        }
      )
    )

  @Effect()
  pagination = this.actions$
    .ofType(
      WordPairsActions.NEXT_PAGE,
      WordPairsActions.PREVIOUS_PAGE,
      WordPairsActions.FIRST_PAGE,
      WordPairsActions.LAST_PAGE,
      WordPairsActions.SET_PAGE_SIZE,
      WordPairsActions.SET_SORT
    )
    .pipe(
      withLatestFrom(
        this.store.select('word-pairs')
      ),
      map(
        ([action, state]) => {
          return {
            type: WordPairsActions.FETCH_DATA,
            payload: state.urlParams
          }
        }

      )
    )

  @Effect()
  edit = this.actions$
    .ofType(
      WordPairsActions.SET_SELECTED_ROW
    )
    .pipe(
      withLatestFrom(
        this.store.select('word-pairs')
      ),
      map(
        ([action, state]) => {
          const item = state.tableData[state.selectedRow];

          return {
            type: WordPairsActions.SET_FORM_ITEM,
            payload: item
          }
        }
      )
    )

  constructor(
    private actions$: Actions,
    private httpVocabularyService: VocabularyHttpService,
    private store: Store<fromLangTable.FeatureState>,
    private router: Router,
    private route: ActivatedRoute,
  ) {}
}
