import { WordPairCategoryModel } from '../../../../shared/models/word-pair-category.model';
import { PaginationUrlParamsModel } from '../../../../shared/models/pagination-url-params.model';
import * as WordPairCategoriesActions from './word-pair-categories.actions';

export interface FeatureState {
  tableState: State;
}

export interface State {
  tableData: WordPairCategoryModel[],
  urlParams: PaginationUrlParamsModel,
  selectedRow: number,
  activeFormItem: WordPairCategoryModel
}

const initialState: State = {
  tableData: [],
  urlParams: PaginationUrlParamsModel.getEmpty('name'),
  selectedRow: null,
  activeFormItem: null
};

export function wordPairCategoriesReducer(state = initialState, action: WordPairCategoriesActions.WordPairCategoriesActions) {
  switch (action.type) {
    case (WordPairCategoriesActions.SET_DATA):
      return {
        ...state,
        tableData: action.payload
      }
    case (WordPairCategoriesActions.SET_TOTAL_RECORDS):
      const urlParamsTotalRecords = new PaginationUrlParamsModel({...state.urlParams});
      urlParamsTotalRecords.setTotalRecords(action.payload);

      return {
        ...state,
        urlParams: urlParamsTotalRecords
      };
    case (WordPairCategoriesActions.NEXT_PAGE):
      const urlParamsNextPage = new PaginationUrlParamsModel({...state.urlParams});
      urlParamsNextPage.nextPage();

      return {
        ...state,
        urlParams: urlParamsNextPage
      }
    case (WordPairCategoriesActions.PREVIOUS_PAGE):
      const urlParamsPreviousPage = new PaginationUrlParamsModel({...state.urlParams});
      urlParamsPreviousPage.previousPage();

      return {
        ...state,
        urlParams: urlParamsPreviousPage
      }
    case (WordPairCategoriesActions.FIRST_PAGE):
      const urlParamsFirstPage = new PaginationUrlParamsModel({...state.urlParams});
      urlParamsFirstPage.firstPage();

      return {
        ...state,
        urlParams: urlParamsFirstPage
      }
    case (WordPairCategoriesActions.LAST_PAGE):
      const urlParamsLastPage = new PaginationUrlParamsModel({...state.urlParams});
      urlParamsLastPage.lastPage();

      return {
        ...state,
        urlParams: urlParamsLastPage
      }
    case (WordPairCategoriesActions.RESET_PAGINATION):
      const urlParamsResetPagination = new PaginationUrlParamsModel({...state.urlParams});
      urlParamsResetPagination.resetPagination();
      return {
        ...state,
        urlParams: urlParamsResetPagination
      }
    case (WordPairCategoriesActions.SET_PAGE_SIZE):
      const urlParamsSetRecordsPerPage = new PaginationUrlParamsModel({...state.urlParams});
      urlParamsSetRecordsPerPage.setPageSize(action.payload);

      return {
        ...state,
        urlParams: urlParamsSetRecordsPerPage
      }
    case (WordPairCategoriesActions.SET_SORT):
      const urlParamsSetSort = new PaginationUrlParamsModel({...state.urlParams});
      urlParamsSetSort.setSort(action.payload);

      return {
        ...state,
        urlParams: urlParamsSetSort
      }

    case (WordPairCategoriesActions.SET_FILTER):
      const urlParamsSetFilter = new PaginationUrlParamsModel({...state.urlParams});
      urlParamsSetFilter.setFilter(action.payload);

      return {
        ...state,
        urlParams: urlParamsSetFilter
      }

    case (WordPairCategoriesActions.SET_SELECTED_ROW):
      return {
        ...state,
        selectedRow: action.payload
      }

    case (WordPairCategoriesActions.SET_FORM_ITEM):
      return {
        ...state,
        activeFormItem: action.payload
      }

    case (WordPairCategoriesActions.DELETE_FORM):
      return {
        ...state,
        selectedRow: null
      }

    default:
      return state;
  }
}
