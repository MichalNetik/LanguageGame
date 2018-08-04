import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { LearningModule } from './modules/learning/learning.module';
import { LeftMenuModule } from './modules/left-menu/left-menu.module';
import { StatisticsModule } from './modules/statistics/statistics.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    LeftMenuModule,
    LearningModule,
    StatisticsModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
