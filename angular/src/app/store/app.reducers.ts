import { ActionReducerMap } from '@ngrx/store';

import * as fromWordPairs from '../modules/vocabulary/word-pairs/store/word-pairs.reducers';
import * as fromWordPairCategories from '../modules/vocabulary/word-pair-categories/store/word-pair-categories.reducers';
import * as fromAuth from '../modules/auth/store/auth.reducers';

export interface AppState {
  'word-pairs': fromWordPairs.State;
  'word-pair-categories': fromWordPairCategories.State;
  'auth': fromAuth.State;
}

export const reducers: ActionReducerMap<AppState> = {
  'word-pairs': fromWordPairs.wordPairsReducer,
  'word-pair-categories': fromWordPairCategories.wordPairCategoriesReducer,
  'auth': fromAuth.authReducer
};
