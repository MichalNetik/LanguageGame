import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VocabularyComponent } from './modules/vocabulary/vocabulary.component';
import { LearningComponent } from './modules/learning/learning.component';
import { StatisticsComponent } from './modules/statistics/statistics.component';
import { WordPairCategoriesComponent } from './modules/vocabulary/word-pair-categories/word-pair-categories.component';
import { WordPairsComponent } from './modules/vocabulary/word-pairs/word-pairs.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/vocabulary', pathMatch: 'full' },
  { path: 'vocabulary', component: VocabularyComponent, children: [
    { path: 'category', component:  WordPairCategoriesComponent },
    { path: 'word-pair', component:  WordPairsComponent }
  ]},
  { path: 'learning', component: LearningComponent },
  { path: 'statistics', component: StatisticsComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule { }
