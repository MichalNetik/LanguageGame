import { WordPairCategoryModel } from './../../../../shared/models/word-pair-category.model';
import { PaginationUrlParamsModel } from '../../../../shared/models/pagination-url-params.model';
import * as WordParirCategoriesActions from './word-pair-categories.actions';

export interface FeatureState {
  tableState: State;
}

export interface State {
  tableData: WordPairCategoryModel[],
  urlParams: PaginationUrlParamsModel
}

const initialState: State = {
  tableData: [],
  urlParams: PaginationUrlParamsModel.getEmpty('name')
};

export function wordPairCategoriesReducer(state = initialState, action: WordParirCategoriesActions.WordPairCategoriesActions) {
  switch (action.type) {
    case (WordParirCategoriesActions.SET_DATA):
      return {
        ...state,
        tableData: action.payload
      }
    case (WordParirCategoriesActions.SET_TOTAL_RECORDS):
      const urlParamsTotalRecords = new PaginationUrlParamsModel({...state.urlParams});
      urlParamsTotalRecords.setTotalRecords(action.payload);

      return {
        ...state,
        urlParams: urlParamsTotalRecords
      };
    case (WordParirCategoriesActions.NEXT_PAGE):
      const urlParamsNextPage = new PaginationUrlParamsModel({...state.urlParams});
      urlParamsNextPage.nextPage();

      return {
        ...state,
        urlParams: urlParamsNextPage
      }
    case (WordParirCategoriesActions.PREVIOUS_PAGE):
      const urlParamsPreviousPage = new PaginationUrlParamsModel({...state.urlParams});
      urlParamsPreviousPage.previousPage();

      return {
        ...state,
        urlParams: urlParamsPreviousPage
      }
    case (WordParirCategoriesActions.FIRST_PAGE):
      const urlParamsFirstPage = new PaginationUrlParamsModel({...state.urlParams});
      urlParamsFirstPage.firstPage();

      return {
        ...state,
        urlParams: urlParamsFirstPage
      }
    case (WordParirCategoriesActions.LAST_PAGE):
      const urlParamsLastPage = new PaginationUrlParamsModel({...state.urlParams});
      urlParamsLastPage.lastPage();

      return {
        ...state,
        urlParams: urlParamsLastPage
      }
    case (WordParirCategoriesActions.SET_PAGE_SIZE):
      const urlParamsSetRecordsPerPage = new PaginationUrlParamsModel({...state.urlParams});
      urlParamsSetRecordsPerPage.setPageSize(action.payload);

      return {
        ...state,
        urlParams: urlParamsSetRecordsPerPage
      }
    case (WordParirCategoriesActions.SET_SORT):
      const urlParamsSetSort = new PaginationUrlParamsModel({...state.urlParams});
      urlParamsSetSort.setSort(action.payload);

      return {
        ...state,
        urlParams: urlParamsSetSort
      }

    case (WordParirCategoriesActions.SET_FILTER):
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
