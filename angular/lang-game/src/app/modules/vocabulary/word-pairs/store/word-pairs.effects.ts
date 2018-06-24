import { WordPairPaginationInterface } from './../../../../shared/models/word-pair.model';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { switchMap, map, mergeMap, withLatestFrom } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { WordPairModel } from '../../../../shared/models/word-pair.model';
import * as LangTableActions from './word-pairs.actions';
import * as fromLangTable from './word-pairs.reducers';
import { VocabularyHttpService } from '../../../../shared/services/vocabulary-http.service';

@Injectable()
export class WordPairsEffects {

  @Effect()
  wordPairsFetch = this.actions$
    .ofType(LangTableActions.FETCH_DATA)
    .pipe(
      switchMap(
        (action: LangTableActions.FetchData) => {
          return this.httpVocabularyService.getWordPairs(action.payload);
        }
      ),
      mergeMap(
        (data: WordPairPaginationInterface) => {
          const tableData = data.data.map(item => new WordPairModel(item));
          const totalRecords = data.totalRecords;

          return [
            {
              type: LangTableActions.SET_DATA,
              payload: tableData
            },
            {
              type: LangTableActions.SET_TOTAL_RECORDS,
              payload: totalRecords
            }
          ]
        }
      )
    )

  @Effect()
  pagination = this.actions$
    .ofType(
      LangTableActions.NEXT_PAGE,
      LangTableActions.PREVIOUS_PAGE,
      LangTableActions.FIRST_PAGE,
      LangTableActions.LAST_PAGE,
      LangTableActions.SET_PAGE_SIZE,
      LangTableActions.SET_SORT
    )
    .pipe(
      withLatestFrom(
        this.store.select('word-pairs')
      ),
      map(
        ([action, state]) => {
          return {
            type: LangTableActions.FETCH_DATA,
            payload: state.urlParams
          }
        }

      )
    )

  constructor(
    private actions$: Actions,
    private httpVocabularyService: VocabularyHttpService,
    private store: Store<fromLangTable.FeatureState>
  ) {}
}
