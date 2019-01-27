import { WordPairCategoryModel } from '../../../../shared/models/word-pair-category.model';
import { PaginationUrlParamsModel } from '../../../../shared/models/pagination-url-params.model';
import * as WordPairCategoriesActions from './word-pair-categories.actions';
import { proccessReducer } from '../../../../shared/components/table-form-combo/utils/reducers.utils';

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
  return proccessReducer(
    action,
    WordPairCategoriesActions,
    state
  )
}
