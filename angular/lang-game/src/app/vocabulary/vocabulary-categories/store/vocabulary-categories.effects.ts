import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';


import { WordPairModel, WordPairInterface } from '../../../shared/models/word-pair.model';
import * as VocabularyActions from './vocabulary-categories.actions';
import { VocabularyHttpService } from '../../../shared/services/vocabulary-http.service';
import { VocabularyCategoryModel, VocabularyCategoryInterface } from '../../../shared/models/vocabulary-category.model';


@Injectable()
export class VocabularyCategoriesEffects {
  @Effect()
  vocabularyCategoriesFetch = this.actions$
    .ofType(VocabularyActions.FETCH_CATEGORIES)
    .pipe(
      switchMap(
        (action: VocabularyActions.FetchCategories) => {
          return this.httpVocabularyService.getAllVocabularyCategories();
        }
      ),
      map(
        (data: VocabularyCategoryInterface[]) => {
          const categories = data.map(item => new VocabularyCategoryModel(item));
          return {
            type: VocabularyActions.SET_CATEGORIES,
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
