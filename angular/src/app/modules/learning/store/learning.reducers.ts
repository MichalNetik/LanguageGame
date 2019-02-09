import { WordPairCategoryModel } from 'app/shared/models/word-pair-category.model';
import * as LearningActions from './learning.actions';


export interface FeatureState {
  learningState: State;
}

export interface State {
  wordPairCategories: WordPairCategoryModel[];
}

const initialState: State = {
  wordPairCategories: []
};

export function learningReducer(state = initialState, action: LearningActions.LearningActions) {
  switch (action.type) {
    case LearningActions.SET_CATEGORIES:
      const wordPairCategories = action.payload.map(item => new WordPairCategoryModel(item));
      return {
        ...state,
        wordPairCategories: wordPairCategories
      }
    default:
      return state;
  }
}
