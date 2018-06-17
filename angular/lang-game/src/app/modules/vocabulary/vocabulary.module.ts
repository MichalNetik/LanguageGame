import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { VocabularyComponent } from './vocabulary.component';
import { WordPairCategoriesEffects } from './word-pair-categories/store/word-pair-categories.effects';
import { WordPairsEffects } from './word-pairs/store/word-pairs.effects';
import { WordPairCategoriesComponent } from './word-pair-categories/word-pair-categories.component';
import { WordPairsComponent } from './word-pairs/word-pairs.component';
import { WordPairsTableComponent } from './word-pairs/word-pairs-table/word-pairs-table.component';
import { WordPairsFormComponent } from './word-pairs/word-pairs-form/word-pairs-form.component';
import { VocabularyRoutingModule } from './vocabulary-routing.module';
import { wordPairsReducer } from './word-pairs/store/word-pairs.reducers';
import { wordPairCategoriesReducer } from './word-pair-categories/store/word-pair-categories.reducers';



@NgModule({
  declarations: [
    VocabularyComponent,
    WordPairCategoriesComponent,
    WordPairsComponent,
    WordPairsTableComponent,
    WordPairsFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    VocabularyRoutingModule,
    AngularFontAwesomeModule,
    StoreModule.forFeature('wordPairsPagination', wordPairsReducer),
    StoreModule.forFeature('categories', wordPairCategoriesReducer),
    EffectsModule.forFeature([WordPairsEffects, WordPairCategoriesEffects])
  ]
})
export class VocabularyModule {}
