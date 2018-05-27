import { ActionReducerMap } from '@ngrx/store';

import * as fromVocabulary from '../vocabulary/store/vocabulary.reducers';

export interface AppState {
  vocabulary: fromVocabulary.State
}

export const reducers: ActionReducerMap<AppState> = {
  vocabulary: fromVocabulary.vocabularyReducer
};
