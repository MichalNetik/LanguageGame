import { Action } from '@ngrx/store';

import {
  WordPairCategoryInterface
} from '../../../shared/models/word-pair-category.model';

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const SET_CATEGORIES = 'SET_CATEGORIES';


export class FetchCategories implements Action {
  readonly type = FETCH_CATEGORIES;

  constructor() {}
}

export class SetCategories implements Action {
  readonly type = SET_CATEGORIES;

  constructor(public payload: WordPairCategoryInterface[]) {}
}

export type LearningActions = FetchCategories |
  SetCategories;
