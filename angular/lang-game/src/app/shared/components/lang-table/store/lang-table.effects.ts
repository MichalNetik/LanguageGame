import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { switchMap, map, mergeMap, withLatestFrom } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { WordPairPaginationInterface, WordPairModel } from '../../../../shared/models/word-pair.model';
import * as LangTableActions from './lang-table.actions';
import * as fromLangTable from './lang-table.reducers';
import { VocabularyHttpService } from '../../../../shared/services/vocabulary-http.service';
import { Router } from '@angular/router';

@Injectable()
export class LangTableEffects {

  @Effect()
  wordPairsFetch = this.actions$
    .ofType(LangTableActions.FETCH_DATA)
    .pipe(
      switchMap(
        (action: LangTableActions.FetchData) => {
          const currentUrl = this.router.url;
          if (/vocabulary\/word-pairs/.test(currentUrl)) {
            return this.httpVocabularyService.getWordPairs(action.payload);
          }
          // else if (/vocabulary\/word-pair-categories/.test(currentUrl)) {
          //  return this.httpVocabularyService.getAllVocabularyCategories(action.payload);
          // }
        }
      ),
      mergeMap(
        (data: WordPairPaginationInterface) => {
          const wordPairs = data.data.map(item => new WordPairModel(item));
          const totalRecords = data.totalRecords;

          return [
            {
              type: LangTableActions.SET_DATA,
              payload: wordPairs
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
      // TODO: source relevant store from router
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
    private store: Store<fromLangTable.FeatureState>,
    private router: Router
  ) {}

}
