import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { switchMap, map, mergeMap, withLatestFrom } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { WordPairPaginationInterface, WordPairModel } from '../../../../shared/models/word-pair.model';
import * as WordPairsActions from './word-pairs.actions';
import * as fromWordPairs from './word-pairs.reducers';
import { VocabularyHttpService } from '../../../../shared/services/vocabulary-http.service';

@Injectable()
export class WordPairsEffects {

  @Effect()
  wordPairsFetch = this.actions$
    .ofType(WordPairsActions.FETCH_WORD_PAIRS)
    .pipe(
      switchMap(
        (action: WordPairsActions.FetchWordPairs) => {
          return this.httpVocabularyService.getWordPairs(action.payload);
        }
      ),
      mergeMap(
        (data: WordPairPaginationInterface) => {
          const wordPairs = data.data.map(item => new WordPairModel(item));
          const totalRecords = data.totalRecords;

          return [
            {
              type: WordPairsActions.SET_WORD_PAIRS,
              payload: wordPairs
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
      WordPairsActions.NEXT_PAGE_WORD_PAIRS,
      WordPairsActions.PREVIOUS_PAGE_WORD_PAIRS,
      WordPairsActions.FIRST_PAGE_WORD_PAIRS,
      WordPairsActions.LAST_PAGE_WORD_PAIRS,
      WordPairsActions.SET_PAGE_SIZE_WORD_PAIRS,
      WordPairsActions.SET_SORT_WORD_PARIS
    )
    .pipe(
      withLatestFrom(this.store.select('wordPairsPagination')),
      map(
        ([action, state]) => {
          return {
            type: WordPairsActions.FETCH_WORD_PAIRS,
            payload: state.urlParams
          }
        }

      )
    )

  constructor(
    private actions$: Actions,
    private httpVocabularyService: VocabularyHttpService,
    private store: Store<fromWordPairs.FeatureState>
  ) {}

}
