import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LeftMenuComponent } from './modules/left-menu/left-menu.component';
import { VocabularyComponent } from './modules/vocabulary/vocabulary.component';
import { LearningComponent } from './modules/learning/learning.component';
import { StatisticsComponent } from './modules/statistics/statistics.component';
import { AppRoutingModule } from './app-routing.module';
import { VocabularyHttpService } from './shared/services/vocabulary-http.service';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/app.reducers';
import { WordPairsCategoriesEffects } from './modules/vocabulary/word-pair-categories/store/word-pair-categories.effects';
import { WordPairsEffects } from './modules/vocabulary/word-pairs/store/word-pairs.effects';
import { WordPairCategoriesComponent } from './modules/vocabulary/word-pair-categories/word-pair-categories.component';
import { WordPairsComponent } from './modules/vocabulary/word-pairs/word-pairs.component';
import { WordPairsTableComponent } from './modules/vocabulary/word-pairs/word-pairs-table/word-pairs-table.component';
import { WordPairsFormComponent } from './modules/vocabulary/word-pairs/word-pairs-form/word-pairs-form.component';


@NgModule({
  declarations: [
    AppComponent,
    LeftMenuComponent,
    VocabularyComponent,
    LearningComponent,
    StatisticsComponent,
    WordPairCategoriesComponent,
    WordPairsTableComponent,
    WordPairsFormComponent,
    WordPairsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([WordPairsCategoriesEffects, WordPairsEffects])
  ],
  providers: [VocabularyHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
