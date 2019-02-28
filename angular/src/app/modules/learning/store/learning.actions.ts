import { Action } from '@ngrx/store';

import {
  WordPairCategoryInterface
} from '../../../shared/models/word-pair-category.model';
import { WordPairInterface } from 'app/shared/models/word-pair.model';

export const FETCH_CATEGORIES = '[learning]FETCH_CATEGORIES';
export const SET_CATEGORIES = '[learning]SET_CATEGORIES';
export const FETCH_WORD_PAIRS = '[learning]FETCH_WORD_PAIRS';
export const SET_WORD_PAIRS = '[learning]SET_WORD_PAIRS';


export class FetchCategories implements Action {
  readonly type = FETCH_CATEGORIES;

  constructor() {}
}

export class SetCategories implements Action {
  readonly type = SET_CATEGORIES;

  constructor(public payload: WordPairCategoryInterface[]) {}
}

export class FetchWordPairs implements Action {
  readonly type = FETCH_WORD_PAIRS;

  constructor(public payload: {filterColumn: string, filterValue: number}) {}
}

export class SetWordPairs implements Action {
  readonly type = SET_WORD_PAIRS;

  constructor(public payload: WordPairInterface[]) {}
}

export type LearningActions = FetchCategories |
  SetCategories |
  FetchWordPairs |
  SetWordPairs;
