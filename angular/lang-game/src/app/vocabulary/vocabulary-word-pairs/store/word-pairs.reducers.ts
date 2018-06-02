import { WordPairModel } from '../../../shared/models/word-pair.model';
import { VocabularyCategoryModel } from '../../../shared/models/vocabulary-category.model';
import * as WordPairsActions from './word-pairs.actions';
import * as fromApp from '../../../store/app.reducers';

export interface FeatureState extends fromApp.AppState {
  wordPairs: State;
}

export interface State {
  wordPairs: WordPairModel[]
}

const initialState: State = {
  wordPairs: []
};

export function wordPairsReducer(state = initialState, action: WordPairsActions.WordPairsActions) {
  switch (action.type) {
    case (WordPairsActions.SET_WORD_PAIRS):
      return {
        ...state,
        wordPairs: [...action.payload]
      }
    default:
      return state;
  }
}
