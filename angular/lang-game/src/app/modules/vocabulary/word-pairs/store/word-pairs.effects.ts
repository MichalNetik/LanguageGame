import { WordPairsHttpService } from '../../../../shared/services/word-pairs-http.service';
import { WordPairInterface, WordPairPaginationInterface, WordPairModel } from '../../../../shared/models/word-pair.model';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import * as TableFormComboActions from './word-pairs.actions';
import * as fromLangTable from './word-pairs.reducers';
import {
  getTableDataFetchEffect,
  getPaginationEffect,
  getEditEffect,
  getSaveFormEffect,
  getDeleteFormEffect
} from '../../../../shared/components/table-form-combo/utils/effects.utils'

@Injectable()
export class WordPairsEffects {
  typeName = 'word-pairs';

  @Effect()
  wordPairsFetch = getTableDataFetchEffect<WordPairPaginationInterface, WordPairModel, WordPairInterface>(
    this.actions$,
    WordPairModel,
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
  edit = getEditEffect<WordPairModel>(
    this.actions$,
    TableFormComboActions,
    WordPairModel,
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
    private httpService: WordPairsHttpService,
    private store: Store<fromLangTable.FeatureState>,
  ) {}
}
