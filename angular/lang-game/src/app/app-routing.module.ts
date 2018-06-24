import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { LearningComponent } from './modules/learning/learning.component';
import { StatisticsComponent } from './modules/statistics/statistics.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/learning', pathMatch: 'full' },
  { path: 'vocabulary', loadChildren: './modules/vocabulary/vocabulary.module#VocabularyModule' },
  { path: 'learning', component: LearningComponent },
  { path: 'statistics', component: StatisticsComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes, { preloadingStrategy: PreloadAllModules }
    )
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule { }
