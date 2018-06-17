import { WordPairCategoryModel } from '../../../../shared/models/word-pair-category.model';
import * as WordPairCategoriesActions from './word-pair-categories.actions';

export interface FeatureState {
  categories: State;
}

export interface State {
  categories: WordPairCategoryModel[]
}

const initialState: State = {
  categories: []
};

export function wordPairCategoriesReducer(state = initialState, action: WordPairCategoriesActions.WordPairCategoriesActions) {
  switch (action.type) {
    case (WordPairCategoriesActions.SET_CATEGORIES):
      return {
        ...state,
        categories: [...action.payload]
      };
    default:
      return state;
  }
}
