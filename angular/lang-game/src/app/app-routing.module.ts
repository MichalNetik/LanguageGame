import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VocabularyComponent } from './vocabulary/vocabulary.component';
import { LearningComponent } from './learning/learning.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { VocabularyCategoriesComponent } from './vocabulary/vocabulary-categories/vocabulary-categories.component';
import { VocabularyWordPairsComponent } from './vocabulary/vocabulary-word-pairs/vocabulary-word-pairs.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/vocabulary', pathMatch: 'full' },
  { path: 'vocabulary', component: VocabularyComponent, children: [
    { path: '',  redirectTo: 'word-pair', pathMatch: 'full' },
    { path: 'category', component:  VocabularyCategoriesComponent },
    { path: 'word-pair', component:  VocabularyWordPairsComponent }
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
