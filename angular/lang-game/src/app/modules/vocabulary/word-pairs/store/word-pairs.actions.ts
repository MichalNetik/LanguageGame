import { WordPairInterface } from './../../../../shared/models/word-pair.model';
import { WordPairModel } from '../../../../shared/models/word-pair.model';
import { Action } from '@ngrx/store';
import { PaginationUrlParamsModel } from '../../../../shared/models/pagination-url-params.model';

export const FETCH_DATA = '[word-pairs]FETCH_DATA';
export const SET_DATA = '[word-pairs]SET_DATA';
export const SET_TOTAL_RECORDS = '[word-pairs]SET_TOTAL_RECORDS';

export const NEXT_PAGE = '[word-pairs]NEXT_PAGE';
export const PREVIOUS_PAGE = '[word-pairs]PREVIOUS_PAGE';
export const FIRST_PAGE = '[word-pairs]FIRST_PAGE';
export const LAST_PAGE = '[word-pairs]LAST_PAGE';
export const RESET_PAGINATION = '[word-pairs]RESET_PAGINATION';
export const SET_PAGE_SIZE = '[word-pairs]SET_PAGE_SIZE';
export const SET_SORT = '[word-pairs]SET_SORT';
export const SET_FILTER = '[word-pairs]SET_FILTER';
export const SET_SELECTED_ROW = '[word-pairs]SET_SELECTED_ROW';
export const SET_FORM_ITEM = '[word-pairs]SET_FORM_ITEM'
export const SAVE_FORM = '[word-pairs]SAVE_FORM';
export const DELETE_FORM = '[word-pairs]DELETE_FORM';

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

export class ResetPagination implements Action {
  readonly type = RESET_PAGINATION;
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

export class SetSelectedRow implements Action {
  readonly type = SET_SELECTED_ROW;

  constructor(
    public payload: number
  ) {}
}

export class SetFormItem implements Action {
  readonly type = SET_FORM_ITEM

  constructor(
    public payload: WordPairModel
  ) {}
}

export class SaveForm implements Action {
  readonly type = SAVE_FORM;

  constructor(
    public payload: WordPairInterface
  ) {}
}

export class DeleteForm implements Action {
  readonly type = DELETE_FORM;

  constructor(
    public payload: number
  ) {}
}

export type WordPairsActions = FetchData |
  SetTotalRecords |
  SetData |
  NextPage |
  PreviousPage |
  FirstPage |
  LastPage |
  ResetPagination |
  SetPageSize |
  SetSort |
  SetFilter |
  SetSelectedRow |
  SetFormItem |
  SaveForm |
  DeleteForm;
