import { WordPairCategoryModel } from '../../../../shared/models/word-pair-category.model';
import * as WordPairCategoriesActions from './word-pair-categories.actions';
import * as fromApp from '../../../../store/app.reducers';

export interface FeatureState extends fromApp.AppState {
  categories: State;
}

export interface State {
  categories: WordPairCategoryModel[]
}

const initialState: State = {
  categories: []
};

export function wordPairsCategoriesReducer(state = initialState, action: WordPairCategoriesActions.WordPairCategoriesActions) {
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
