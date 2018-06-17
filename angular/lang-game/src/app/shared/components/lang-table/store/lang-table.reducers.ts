import { WordPairCategoryModel } from './../../../models/word-pair-category.model';
import { PaginationUrlParamsModel } from '../../../../shared/models/pagination-url-params.model';
import { WordPairModel } from '../../../../shared/models/word-pair.model';
import * as LangTableActions from './lang-table.actions';

export interface FeatureState {
  tableState: State;
}

export interface State {
  tableData: WordPairModel[] | WordPairCategoryModel[],
  urlParams: PaginationUrlParamsModel
}

const initialState: State = {
  tableData: [],
  urlParams: PaginationUrlParamsModel.getEmpty()
};

export function langTableReducer(state = initialState, action: LangTableActions.LangTableActions) {
  switch (action.type) {
    case (LangTableActions.SET_DATA):
      return {
        ...state,
        tableData: action.payload
      }
    case (LangTableActions.SET_TOTAL_RECORDS):
      const urlParamsTotalRecords = new PaginationUrlParamsModel({...state.urlParams});
      urlParamsTotalRecords.setTotalRecords(action.payload);

      return {
        ...state,
        urlParams: urlParamsTotalRecords
      };
    case (LangTableActions.NEXT_PAGE):
      const urlParamsNextPage = new PaginationUrlParamsModel({...state.urlParams});
      urlParamsNextPage.nextPage();

      return {
        ...state,
        urlParams: urlParamsNextPage
      }
    case (LangTableActions.PREVIOUS_PAGE):
      const urlParamsPreviousPage = new PaginationUrlParamsModel({...state.urlParams});
      urlParamsPreviousPage.previousPage();

      return {
        ...state,
        urlParams: urlParamsPreviousPage
      }
    case (LangTableActions.FIRST_PAGE):
      const urlParamsFirstPage = new PaginationUrlParamsModel({...state.urlParams});
      urlParamsFirstPage.firstPage();

      return {
        ...state,
        urlParams: urlParamsFirstPage
      }
    case (LangTableActions.LAST_PAGE):
      const urlParamsLastPage = new PaginationUrlParamsModel({...state.urlParams});
      urlParamsLastPage.lastPage();

      return {
        ...state,
        urlParams: urlParamsLastPage
      }
    case (LangTableActions.SET_PAGE_SIZE):
      const urlParamsSetRecordsPerPage = new PaginationUrlParamsModel({...state.urlParams});
      urlParamsSetRecordsPerPage.setPageSize(action.payload);

      return {
        ...state,
        urlParams: urlParamsSetRecordsPerPage
      }
    case (LangTableActions.SET_SORT):
      const urlParamsSetSort = new PaginationUrlParamsModel({...state.urlParams});
      urlParamsSetSort.setSort(action.payload);

      return {
        ...state,
        urlParams: urlParamsSetSort
      }

    case (LangTableActions.SET_FILTER):
      const urlParamsSetFilter = new PaginationUrlParamsModel({...state.urlParams});

      urlParamsSetFilter.setFilter(action.payload);

      return {
        ...state,
        urlParams: urlParamsSetFilter
      }


    default:
      return state;
  }
}
