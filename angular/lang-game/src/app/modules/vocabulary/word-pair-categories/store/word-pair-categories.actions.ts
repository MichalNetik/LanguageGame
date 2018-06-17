import { Action } from '@ngrx/store';
import { WordPairCategoryModel } from '../../../../shared/models/word-pair-category.model';

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const SET_CATEGORIES = 'SET_CATEGORIES';

export class FetchCategories implements Action {
  readonly type = FETCH_CATEGORIES;
}

export class SetCategories implements Action {
  readonly type = SET_CATEGORIES;

  constructor(public payload: WordPairCategoryModel[]) {}
}

export type WordPairCategoriesActions = FetchCategories |
  SetCategories;
