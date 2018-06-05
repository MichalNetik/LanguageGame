import { ActionReducerMap } from '@ngrx/store';

import * as fromVocabularyCategories from '../vocabulary/vocabulary-categories/store/vocabulary-categories.reducers';
import * as fromWordPairs from '../vocabulary/vocabulary-word-pairs/store/word-pairs.reducers';


export interface AppState {
  categories: fromVocabularyCategories.State,
  wordPairsPagination: fromWordPairs.State
}

export const reducers: ActionReducerMap<AppState> = {
  categories: fromVocabularyCategories.vocabularyCategoriesReducer,
  wordPairsPagination: fromWordPairs.wordPairsReducer
};
