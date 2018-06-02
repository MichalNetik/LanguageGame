import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';


import { WordPairModel, WordPairInterface } from '../../../shared/models/word-pair.model';
import * as WordPairsActions from './word-pairs.actions';
import { VocabularyHttpService } from '../../../shared/services/vocabulary-http.service';

@Injectable()
export class WordPairsEffects {

  @Effect()
  wordPairsFetch = this.actions$
    .ofType(WordPairsActions.FETCH_WORD_PAIRS)
    .pipe(
      switchMap(
        (action: WordPairsActions.FetchWordPairs) => {
          return this.httpVocabularyService.getWordPairs();
        }
      ),
      map(
        (data: WordPairInterface[]) => {
          const wordPairs = data.map(item => new WordPairModel(item));
          return {
            type: WordPairsActions.SET_WORD_PAIRS,
            payload: wordPairs
          }
        }
      )
    )

  constructor(
    private actions$: Actions,
    private httpVocabularyService: VocabularyHttpService
  ) {}

}
