import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';

import * as WordPairCategoryActions from './word-pair-categories.actions';
import { VocabularyHttpService } from '../../../../shared/services/vocabulary-http.service';
import { WordPairCategoryModel, WordPairCategoryInterface } from '../../../../shared/models/word-pair-category.model';


@Injectable()
export class WordPairsCategoriesEffects {
  @Effect()
  vocabularyCategoriesFetch = this.actions$
    .ofType(WordPairCategoryActions.FETCH_CATEGORIES)
    .pipe(
      switchMap(
        (action: WordPairCategoryActions.FetchCategories) => {
          return this.httpVocabularyService.getAllVocabularyCategories();
        }
      ),
      map(
        (data: WordPairCategoryInterface[]) => {
          const categories = data.map(item => new WordPairCategoryModel(item));
          return {
            type: WordPairCategoryActions.SET_CATEGORIES,
            payload: categories
          }
        }
      )
    )

  constructor(
    private actions$: Actions,
    private httpVocabularyService: VocabularyHttpService
  ) {}

}
