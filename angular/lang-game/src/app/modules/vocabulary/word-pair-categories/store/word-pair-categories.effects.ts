import { WordPairCategoriesHttpService } from '../../../../shared/services/word-pair-categories-http.service';
import {
  WordPairCategoryPaginationInterface,
  WordPairCategoryModel,
  WordPairCategoryInterface
} from '../../../../shared/models/word-pair-category.model';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import * as TableFormComboActions from './word-pair-categories.actions';
import * as fromLangTable from './word-pair-categories.reducers';
import {
  getTableDataFetchEffect,
  getPaginationEffect,
  getEditEffect,
  getSaveFormEffect,
  getDeleteFormEffect
} from '../../../../shared/components/table-form-combo/utils/effects.utils';

@Injectable()
export class WordPairCategoriesEffects {
  typeName = 'word-pair-categories';

  @Effect()
  wordPairCategoriesFetch = getTableDataFetchEffect<WordPairCategoryPaginationInterface, WordPairCategoryModel, WordPairCategoryInterface>(
    this.actions$,
    WordPairCategoryModel,
    TableFormComboActions,
    this.httpService
  )

  @Effect()
  pagination = getPaginationEffect(
    this.actions$,
    TableFormComboActions,
    this.store.select(this.typeName)
  )

  @Effect()
  edit = getEditEffect<WordPairCategoryModel>(
    this.actions$,
    TableFormComboActions,
    WordPairCategoryModel,
    this.store.select(this.typeName)
  )

  @Effect()
  saveForm = getSaveFormEffect(
    this.actions$,
    TableFormComboActions,
    this.httpService,
    this.store.select(this.typeName)
  )

  @Effect()
  deleteForm = getDeleteFormEffect(
    this.actions$,
    TableFormComboActions,
    this.httpService,
    this.store.select(this.typeName)
  )

  constructor(
    private actions$: Actions,
    private httpService: WordPairCategoriesHttpService,
    private store: Store<fromLangTable.FeatureState>,
  ) {}
}
