import { PaginationUrlParamsModel } from '../../../../shared/models/pagination-url-params.model';
import { WordPairModel } from '../../../../shared/models/word-pair.model';
import * as WordPairsActions from './word-pairs.actions';
import { proccessReducer } from '../../../../shared/components/table-form-combo/utils/reducers.utils';

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
  return proccessReducer(
    action,
    WordPairsActions,
    state
  )
}
