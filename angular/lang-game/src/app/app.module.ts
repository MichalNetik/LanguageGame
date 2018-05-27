import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';

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
import { VocabularyEffects } from './vocabulary/store/vocabulary.effects';


@NgModule({
  declarations: [
    AppComponent,
    LeftMenuComponent,
    VocabularyComponent,
    LearningComponent,
    StatisticsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([VocabularyEffects])
  ],
  providers: [VocabularyHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
