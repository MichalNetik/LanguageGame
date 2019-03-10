import { WordPairCategoryModel } from 'app/shared/models/word-pair-category.model';
import * as LearningActions from './learning.actions';
import { WordPairModel } from 'app/shared/models/word-pair.model';


export interface FeatureState {
  learningState: State;
}

export interface State {
  wordPairCategories: WordPairCategoryModel[];
  wordPairs: WordPairModel[];
}

const initialState: State = {
  wordPairCategories: [],
  wordPairs: []
};

export function learningReducer(state = initialState, action: LearningActions.LearningActions) {
  switch (action.type) {
    case LearningActions.SET_CATEGORIES:
      const wordPairCategories = action.payload.map(item => new WordPairCategoryModel(item));
      return {
        ...state,
        wordPairCategories: wordPairCategories
      }
    case LearningActions.SET_WORD_PAIRS:
      const wordPairs = action.payload.map(item => new WordPairModel(item));
      return {
        ...state,
        wordPairs: wordPairs
      }
    default:
      return state;
  }
}
