import { WordPairPaginationModel } from './../../../shared/models/word-pair.model';
import { VocabularyCategoryModel } from '../../../shared/models/vocabulary-category.model';
import * as WordPairsActions from './word-pairs.actions';
import * as fromApp from '../../../store/app.reducers';

export interface FeatureState extends fromApp.AppState {
  wordPairsPagination: State;
}

export interface State {
  wordPairsPagination: WordPairPaginationModel
}

const initialState: State = {
  wordPairsPagination: WordPairPaginationModel.getEmpty()
};

export function wordPairsReducer(state = initialState, action: WordPairsActions.WordPairsActions) {
  switch (action.type) {
    case (WordPairsActions.SET_WORD_PAIRS):
      return {
        ...state,
        wordPairsPagination: action.payload
      }
    default:
      return state;
  }
}
