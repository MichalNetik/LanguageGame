import { WordPairModel } from '../../../../shared/models/word-pair.model';
import { Action } from '@ngrx/store';
import { PaginationUrlParamsModel } from '../../../../shared/models/pagination-url-params.model';

export const FETCH_DATA = '[word-pair-categories]FETCH_DATA';
export const SET_DATA = '[word-pair-categories]SET_DATA';
export const SET_TOTAL_RECORDS = '[word-pair-categories]SET_TOTAL_RECORDS';

export const NEXT_PAGE = '[word-pair-categories]NEXT_PAGE';
export const PREVIOUS_PAGE = '[word-pair-categories]PREVIOUS_PAGE';
export const FIRST_PAGE = '[word-pair-categories]FIRST_PAGE';
export const LAST_PAGE = '[word-pair-categories]LAST_PAGE';
export const SET_PAGE_SIZE = '[word-pair-categories]SET_PAGE_SIZE';
export const SET_SORT = '[word-pair-categories]SET_SORT';
export const SET_FILTER = '[word-pair-categories]SET_FILTER';


export class FetchData implements Action {
  readonly type = FETCH_DATA;

  constructor(
    public payload: PaginationUrlParamsModel | {}
  ) {}
}

export class SetData implements Action {
  readonly type = SET_DATA;

  constructor(public payload: WordPairModel[]) {}
}

export class SetTotalRecords implements Action {
  readonly type = SET_TOTAL_RECORDS;

  constructor(public payload: number) {}
}

export class NextPage implements Action {
  readonly type = NEXT_PAGE;
}

export class PreviousPage implements Action {
  readonly type = PREVIOUS_PAGE;
}

export class FirstPage implements Action {
  readonly type = FIRST_PAGE;
}

export class LastPage implements Action {
  readonly type = LAST_PAGE;
}

export class SetPageSize implements Action {
  readonly type = SET_PAGE_SIZE;

  constructor(public payload: number) {}
}

export class SetSort implements Action {
  readonly type = SET_SORT;

  constructor(
    public payload: string
  ) {}
}

export class SetFilter implements Action {
    readonly type = SET_FILTER;

    constructor(
      public payload: { filterColumn: string, filterValue: string}
    ) {}
}

export type WordPairCategoriesActions = FetchData |
  SetTotalRecords |
  SetData |
  NextPage |
  PreviousPage |
  FirstPage |
  LastPage |
  SetPageSize |
  SetSort |
  SetFilter;
