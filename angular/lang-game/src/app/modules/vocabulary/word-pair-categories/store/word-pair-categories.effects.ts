import { WordPairCategoryPaginationInterface, WordPairCategoryModel } from './../../../../shared/models/word-pair-category.model';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { switchMap, map, mergeMap, withLatestFrom, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import * as TableComboActions from './word-pair-categories.actions';
import * as fromLangTable from './word-pair-categories.reducers';
import { VocabularyHttpService } from '../../../../shared/services/vocabulary-http.service';

@Injectable()
export class WordPairCategoriesEffects {

  @Effect()
  wordPairCategoriesFetch = this.actions$
    .ofType(TableComboActions.FETCH_DATA)
    .pipe(
      switchMap(
        (action: TableComboActions.FetchData) => {
          return this.httpVocabularyService.getWordPairCategories(action.payload);
        }
      ),
      mergeMap(
        (data: WordPairCategoryPaginationInterface) => {
          const tableData = data.data.map(item => new WordPairCategoryModel(item));
          const totalRecords = data.totalRecords;

          return [
            {
              type: TableComboActions.SET_DATA,
              payload: tableData
            },
            {
              type: TableComboActions.SET_TOTAL_RECORDS,
              payload: totalRecords
            }
          ]
        }
      )
    )

  @Effect()
  pagination = this.actions$
    .ofType(
      TableComboActions.NEXT_PAGE,
      TableComboActions.PREVIOUS_PAGE,
      TableComboActions.FIRST_PAGE,
      TableComboActions.LAST_PAGE,
      TableComboActions.RESET_PAGINATION,
      TableComboActions.SET_PAGE_SIZE,
      TableComboActions.SET_SORT
    )
    .pipe(
      withLatestFrom(
        this.store.select('word-pair-categories')
      ),
      map(
        ([action, state]) => {
          return {
            type: TableComboActions.FETCH_DATA,
            payload: state.urlParams
          }
        }

      )
    )

  @Effect()
  edit = this.actions$
    .ofType(
      TableComboActions.SET_SELECTED_ROW
    )
    .pipe(
      withLatestFrom(
        this.store.select('word-pair-categories')
      ),
      map(
        ([action, state]) => {
          let item: WordPairCategoryModel;
          switch (state.selectedRow) {
            case (null):
              item = null;
              break;
            case ('new'):
              item = WordPairCategoryModel.getEmpty();
              break;
            default:
              item = state.tableData[state.selectedRow];
          }
          return {
            type: TableComboActions.SET_FORM_ITEM,
            payload: item
          }
        }
      )
    )

  @Effect()
  saveForm = this.actions$
    .ofType(
      TableComboActions.SAVE_FORM
    )
    .pipe(
      switchMap(
        (action: TableComboActions.SaveForm) => {
          if (action.payload.id) {
            return this.httpVocabularyService.updateWordPairCategory(action.payload);
          } else {
            return this.httpVocabularyService.saveWordPairCategory(action.payload);
          }
        }
      ),
      withLatestFrom(
        this.store.select('word-pair-categories')
      ),
      mergeMap(
        ([action, state]) => {
          return [
            {
              type: TableComboActions.RESET_PAGINATION
            },
            {
              type: TableComboActions.SET_SELECTED_ROW,
              payload: null
            }
          ]
        }
      )
    )

  @Effect()
  deleteForm = this.actions$
    .ofType(
      TableComboActions.DELETE_FORM
    )
    .pipe(
      switchMap(
        (action: TableComboActions.DeleteForm) => {
          return this.httpVocabularyService.deleteWordPairCategory(action.payload);
        }
      ),
      withLatestFrom(
        this.store.select('word-pair-categories')
      ),
      mergeMap(
        ([action, state]) => {
          return [
            {
              type: TableComboActions.SET_SELECTED_ROW,
              payload: null
            },
            {
              type: TableComboActions.FETCH_DATA,
              payload: state.urlParams
            }
          ]
        }
      )
    )

  constructor(
    private actions$: Actions,
    private httpVocabularyService: VocabularyHttpService,
    private store: Store<fromLangTable.FeatureState>,
  ) {}
}
