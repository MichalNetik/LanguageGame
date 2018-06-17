import { PaginationUrlParamsModel } from '../../../../shared/models/pagination-url-params.model';
import { WordPairModel } from '../../../../shared/models/word-pair.model';
import * as WordPairsActions from './word-pairs.actions';

export interface FeatureState {
  wordPairsPagination: State;
}

export interface State {
  wordPairs: WordPairModel[],
  urlParams: PaginationUrlParamsModel
}

const initialState: State = {
  wordPairs: [],
  urlParams: PaginationUrlParamsModel.getEmpty()
};

export function wordPairsReducer(state = initialState, action: WordPairsActions.WordPairsActions) {
  switch (action.type) {
    case (WordPairsActions.SET_WORD_PAIRS):
      return {
        ...state,
        wordPairs: action.payload
      }
    case (WordPairsActions.SET_TOTAL_RECORDS):
      const urlParamsTotalRecords = new PaginationUrlParamsModel({...state.urlParams});
      urlParamsTotalRecords.setTotalRecords(action.payload);

      return {
        ...state,
        urlParams: urlParamsTotalRecords
      };
    case (WordPairsActions.NEXT_PAGE_WORD_PAIRS):
      const urlParamsNextPage = new PaginationUrlParamsModel({...state.urlParams});
      urlParamsNextPage.nextPage();

      return {
        ...state,
        urlParams: urlParamsNextPage
      }
    case (WordPairsActions.PREVIOUS_PAGE_WORD_PAIRS):
      const urlParamsPreviousPage = new PaginationUrlParamsModel({...state.urlParams});
      urlParamsPreviousPage.previousPage();

      return {
        ...state,
        urlParams: urlParamsPreviousPage
      }
    case (WordPairsActions.FIRST_PAGE_WORD_PAIRS):
      const urlParamsFirstPage = new PaginationUrlParamsModel({...state.urlParams});
      urlParamsFirstPage.firstPage();

      return {
        ...state,
        urlParams: urlParamsFirstPage
      }
    case (WordPairsActions.LAST_PAGE_WORD_PAIRS):
      const urlParamsLastPage = new PaginationUrlParamsModel({...state.urlParams});
      urlParamsLastPage.lastPage();

      return {
        ...state,
        urlParams: urlParamsLastPage
      }
    case (WordPairsActions.SET_PAGE_SIZE_WORD_PAIRS):
      const urlParamsSetRecordsPerPage = new PaginationUrlParamsModel({...state.urlParams});
      urlParamsSetRecordsPerPage.setPageSize(action.payload);

      return {
        ...state,
        urlParams: urlParamsSetRecordsPerPage
      }
    case (WordPairsActions.SET_SORT_WORD_PARIS):
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


    default:
      return state;
  }
}
