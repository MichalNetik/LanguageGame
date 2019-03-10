import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import * as LearningActions from './learning.actions';
import { switchMap, map } from 'rxjs/operators';
import { WordPairCategoriesHttpService } from 'app/shared/services/word-pair-categories-http.service';
import { WordPairsHttpService } from 'app/shared/services/word-pairs-http.service';
import { WordPairCategoryPaginationInterface } from 'app/shared/models/word-pair-category.model';
import { WordPairPaginationInterface } from 'app/shared/models/word-pair.model';


@Injectable()
export class LearningEffects {
  @Effect()
  wordPairCategoriesFetch = this.actions$
    .pipe(
      ofType(LearningActions.FETCH_CATEGORIES),
      switchMap(
        (action: LearningActions.FetchCategories) => {
          return this.categoriesHttpService.getItems();
        }
      ),
      map(
        (data: WordPairCategoryPaginationInterface) => {
          return {
            type: LearningActions.SET_CATEGORIES,
            payload: data.data
          }
        }
      )
    )

  @Effect()
  wordPairsFetch = this.actions$
    .pipe(
      ofType(LearningActions.FETCH_WORD_PAIRS),
      switchMap(
        (action: LearningActions.FetchWordPairs) => {
          return this.wordPairsHttpService.getAllFilteredItems(action.payload);
        }
      ),
      map(
        (data: WordPairPaginationInterface) => {
          return {
            type: LearningActions.SET_WORD_PAIRS,
            payload: data.data
          }
        }
      )
    )

  constructor(
    private actions$: Actions,
    private categoriesHttpService: WordPairCategoriesHttpService,
    private wordPairsHttpService: WordPairsHttpService
  ) {}
}



