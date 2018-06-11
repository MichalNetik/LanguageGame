import { WordPairModel } from './../../../shared/models/word-pair.model';
import { Action } from '@ngrx/store';
import { VocabularyCategoryModel } from '../../../shared/models/vocabulary-category.model';
import { PaginationUrlParamsModel } from './../../../shared/models/pagination-url-params.model';

export const FETCH_WORD_PAIRS = 'FETCH_WORD_PAIRS';
export const SET_WORD_PAIRS = 'SET_WORD_PAIRS';
export const SET_TOTAL_RECORDS = 'SET_TOTAL_RECORDS';

export const NEXT_PAGE_WORD_PAIRS = 'NEXT_PAGE_WORD_PAIRS';
export const PREVIOUS_PAGE_WORD_PAIRS = 'PREVIOUS_PAGE_WORD_PAIRS';
export const FIRST_PAGE_WORD_PAIRS = 'FIRST_PAGE_WORD_PAIRS';
export const LAST_PAGE_WORD_PAIRS = 'LAST_PAGE_WORD_PAIRS';
export const SET_PAGE_SIZE_WORD_PAIRS = 'SET_PAGE_SIZE_WORD_PAIRS';
export const SET_SORT_WORD_PARIS = 'SET_SORT_WORD_PARIS';


export class FetchWordPairs implements Action {
  readonly type = FETCH_WORD_PAIRS;

  constructor(
    public payload: PaginationUrlParamsModel
  ) {}
}

export class SetWordPairs implements Action {
  readonly type = SET_WORD_PAIRS;

  constructor(public payload: WordPairModel[]) {}
}

export class SetTotalRecords implements Action {
  readonly type = SET_TOTAL_RECORDS;

  constructor(public payload: number) {}
}

export class NextPageWordPairs implements Action {
  readonly type = NEXT_PAGE_WORD_PAIRS;
}

export class PreviousPageWordPairs implements Action {
  readonly type = PREVIOUS_PAGE_WORD_PAIRS;
}

export class FirstPageWordPairs implements Action {
  readonly type = FIRST_PAGE_WORD_PAIRS;
}

export class LastPageWordPairs implements Action {
  readonly type = LAST_PAGE_WORD_PAIRS;
}

export class SetPageSizeWordPairs implements Action {
  readonly type = SET_PAGE_SIZE_WORD_PAIRS;

  constructor(public payload: number) {}
}

export class SetSortWordPairs implements Action {
  readonly type = SET_SORT_WORD_PARIS;

  constructor(
    public payload: string
  ) {}
}

export type WordPairsActions = FetchWordPairs |
  SetTotalRecords |
  SetWordPairs |
  NextPageWordPairs |
  PreviousPageWordPairs |
  FirstPageWordPairs |
  LastPageWordPairs |
  SetPageSizeWordPairs |
  SetSortWordPairs;
