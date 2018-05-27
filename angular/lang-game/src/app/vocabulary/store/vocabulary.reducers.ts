import { VocabularyCategoryModel } from '../../shared/models/vocabulary-category.model';
import * as VocabularyActions from './vocabulary.actions';
import * as fromApp from '../../store/app.reducers';

export interface FeatureState extends fromApp.AppState {
  categories: State;
}

export interface State {
  categories: VocabularyCategoryModel[]
}

const initialState: State = {
  categories: []
};

export function vocabularyReducer(state = initialState, action: VocabularyActions.VocabularyActions) {
  switch (action.type) {
    case (VocabularyActions.SET_CATEGORIES):
      return {
        ...state,
        categories: [...action.payload]
      };
    default:
      return state;
  }
}
