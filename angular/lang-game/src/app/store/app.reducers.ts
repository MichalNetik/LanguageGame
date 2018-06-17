import { ActionReducerMap } from '@ngrx/store';

import * as fromVocabularyCategories from '../modules/vocabulary/word-pair-categories/store/word-pair-categories.reducers';
import * as fromWordPairs from '../modules/vocabulary/word-pairs/store/word-pairs.reducers';


export interface AppState {
  categories: fromVocabularyCategories.State,
  wordPairsPagination: fromWordPairs.State
}

export const reducers: ActionReducerMap<AppState> = {
  categories: fromVocabularyCategories.wordPairsCategoriesReducer,
  wordPairsPagination: fromWordPairs.wordPairsReducer
};
