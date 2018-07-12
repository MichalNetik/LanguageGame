import { PaginationUrlParamsModel } from '../../../../shared/models/pagination-url-params.model';
import { WordPairModel } from '../../../../shared/models/word-pair.model';
import * as WordPairsActions from './word-pairs.actions';

export interface FeatureState {
  tableState: State;
}

export interface State {
  tableData: WordPairModel[],
  urlParams: PaginationUrlParamsModel,
  selectedRow: number,
  activeFormItem: WordPairModel
}

const initialState: State = {
  tableData: [],
  urlParams: PaginationUrlParamsModel.getEmpty('base'),
  selectedRow: null,
  activeFormItem: null
};

export function wordPairsReducer(state = initialState, action: WordPairsActions.WordPairsActions) {
  switch (action.type) {
    case (WordPairsActions.SET_DATA):
      return {
        ...state,
        tableData: action.payload
      }
    case (WordPairsActions.SET_TOTAL_RECORDS):
      const urlParamsTotalRecords = new PaginationUrlParamsModel({...state.urlParams});
      urlParamsTotalRecords.setTotalRecords(action.payload);

      return {
        ...state,
        urlParams: urlParamsTotalRecords
      };
    case (WordPairsActions.NEXT_PAGE):
      const urlParamsNextPage = new PaginationUrlParamsModel({...state.urlParams});
      urlParamsNextPage.nextPage();

      return {
        ...state,
        urlParams: urlParamsNextPage
      }
    case (WordPairsActions.PREVIOUS_PAGE):
      const urlParamsPreviousPage = new PaginationUrlParamsModel({...state.urlParams});
      urlParamsPreviousPage.previousPage();

      return {
        ...state,
        urlParams: urlParamsPreviousPage
      }
    case (WordPairsActions.FIRST_PAGE):
      const urlParamsFirstPage = new PaginationUrlParamsModel({...state.urlParams});
      urlParamsFirstPage.firstPage();

      return {
        ...state,
        urlParams: urlParamsFirstPage
      }
    case (WordPairsActions.LAST_PAGE):
      const urlParamsLastPage = new PaginationUrlParamsModel({...state.urlParams});
      urlParamsLastPage.lastPage();

      return {
        ...state,
        urlParams: urlParamsLastPage
      }
    case (WordPairsActions.SET_PAGE_SIZE):
      const urlParamsSetRecordsPerPage = new PaginationUrlParamsModel({...state.urlParams});
      urlParamsSetRecordsPerPage.setPageSize(action.payload);

      return {
        ...state,
        urlParams: urlParamsSetRecordsPerPage
      }
    case (WordPairsActions.SET_SORT):
      const urlParamsSetSort = new PaginationUrlParamsModel({...state.urlParams});
      urlParamsSetSort.setSort(action.payload);

      return {
        ...state,
        urlParams: urlParamsSetSort
      }

    case (WordPairsActions.SET_FILTER):
      const urlParamsSetFilter = new PaginationUrlParamsModel({...state.urlParams});

      urlParamsSetFilter.setFilter(action.payload);

      return {
        ...state,
        urlParams: urlParamsSetFilter
      }

    case (WordPairsActions.SET_SELECTED_ROW):
      return {
        ...state,
        selectedRow: action.payload
      }

    case (WordPairsActions.SET_FORM_ITEM):
      return {
        ...state,
        activeFormItem: action.payload
      }

    default:
      return state;
  }
}
