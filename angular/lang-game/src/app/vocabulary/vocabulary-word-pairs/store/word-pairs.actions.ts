import { Action } from '@ngrx/store';
import { VocabularyCategoryModel } from '../../../shared/models/vocabulary-category.model';
import { WordPairPaginationModel } from './../../../shared/models/word-pair.model';

export const FETCH_WORD_PAIRS = 'FETCH_WORD_PAIRS';
export const SET_WORD_PAIRS = 'SET_WORD_PAIRS';

export class FetchWordPairs implements Action {
  readonly type = FETCH_WORD_PAIRS;

  constructor(
    public payload: {
      startOffset: number,
      endOffset: number,
      sortColumn: string,
      sortDirection: string,
      filterColumn?: string,
      filterValue?: string
    }
  ) {}
}

export class SetWordPairs implements Action {
  readonly type = SET_WORD_PAIRS;

  constructor(public payload: WordPairPaginationModel) {}
}

export type WordPairsActions = FetchWordPairs |
  SetWordPairs;
