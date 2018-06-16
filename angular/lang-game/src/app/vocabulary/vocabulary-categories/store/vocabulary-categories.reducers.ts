import { WordPairModel } from '../../../shared/models/word-pair.model';
import { VocabularyCategoryModel } from '../../../shared/models/vocabulary-category.model';
import * as VocabularyCategoriesActions from './vocabulary-categories.actions';
import * as fromApp from '../../../store/app.reducers';

export interface FeatureState extends fromApp.AppState {
  categories: State;
}

export interface State {
  categories: VocabularyCategoryModel[]
}

const initialState: State = {
  categories: []
};

export function vocabularyCategoriesReducer(state = initialState, action: VocabularyCategoriesActions.VocabularyCategoriesActions) {
  switch (action.type) {
    case (VocabularyCategoriesActions.SET_CATEGORIES):
      return {
        ...state,
        categories: [...action.payload]
      };
    default:
      return state;
  }
}
