import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { VocabularyComponent } from './vocabulary/vocabulary.component';
import { LearningComponent } from './learning/learning.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { AppRoutingModule } from './app-routing.module';
import { VocabularyHttpService } from './shared/services/vocabulary-http.service';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/app.reducers';
import { VocabularyCategoriesEffects } from './vocabulary/vocabulary-categories/store/vocabulary-categories.effects';
import { WordPairsEffects } from './vocabulary/vocabulary-word-pairs/store/word-pairs.effects';
import { VocabularyCategoriesComponent } from './vocabulary/vocabulary-categories/vocabulary-categories.component';
import { VocabularyWordPairsComponent } from './vocabulary/vocabulary-word-pairs/vocabulary-word-pairs.component';
import { WordPairsTableComponent } from './vocabulary/vocabulary-word-pairs/word-pairs-table/word-pairs-table.component';
import { WordPairsFormComponent } from './vocabulary/vocabulary-word-pairs/word-pairs-form/word-pairs-form.component';


@NgModule({
  declarations: [
    AppComponent,
    LeftMenuComponent,
    VocabularyComponent,
    LearningComponent,
    StatisticsComponent,
    VocabularyCategoriesComponent,
    VocabularyWordPairsComponent,
    WordPairsTableComponent,
    WordPairsFormComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([VocabularyCategoriesEffects, WordPairsEffects])
  ],
  providers: [VocabularyHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
