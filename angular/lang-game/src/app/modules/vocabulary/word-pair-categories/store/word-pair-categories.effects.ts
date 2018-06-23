import { WordPairCategoryPaginationInterface, WordPairCategoryModel } from './../../../../shared/models/word-pair-category.model';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { switchMap, map, mergeMap, withLatestFrom } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import * as WordPairCategoriesActions from './word-pair-categories.actions';
import * as fromWordPairCategories from './word-pair-categories.reducers';
import { VocabularyHttpService } from '../../../../shared/services/vocabulary-http.service';

@Injectable()
export class WordPairCategoriesEffects {

  @Effect()
  wordPairsFetch = this.actions$
    .ofType(WordPairCategoriesActions.FETCH_DATA)
    .pipe(
      switchMap(
        (action: WordPairCategoriesActions.FetchData) => {
          return this.httpVocabularyService.getWordPairCategories(action.payload);
        }
      ),
      mergeMap(
        (data: WordPairCategoryPaginationInterface) => {
          const tableData = data.data.map(item => new WordPairCategoryModel(item));
          const totalRecords = data.totalRecords;

          return [
            {
              type: WordPairCategoriesActions.SET_DATA,
              payload: tableData
            },
            {
              type: WordPairCategoriesActions.SET_TOTAL_RECORDS,
              payload: totalRecords
            }
          ]
        }
      )
    )

  @Effect()
  pagination = this.actions$
    .ofType(
      WordPairCategoriesActions.NEXT_PAGE,
      WordPairCategoriesActions.PREVIOUS_PAGE,
      WordPairCategoriesActions.FIRST_PAGE,
      WordPairCategoriesActions.LAST_PAGE,
      WordPairCategoriesActions.SET_PAGE_SIZE,
      WordPairCategoriesActions.SET_SORT
    )
    .pipe(
      withLatestFrom(
        this.store.select('word-pair-categories')
      ),
      map(
        ([action, state]) => {
          return {
            type: WordPairCategoriesActions.FETCH_DATA,
            payload: state.urlParams
          }
        }

      )
    )

  constructor(
    private actions$: Actions,
    private httpVocabularyService: VocabularyHttpService,
    private store: Store<fromWordPairCategories.FeatureState>
  ) {}
}
