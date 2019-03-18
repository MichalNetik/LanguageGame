import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { StatisticsComponent } from './modules/statistics/statistics.component';
import { AuthComponent } from './modules/auth/auth.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/learning/start', pathMatch: 'full' },
  { path: 'vocabulary', loadChildren: './modules/vocabulary/vocabulary.module#VocabularyModule' },
  { path: 'learning', loadChildren: './modules/learning/learning.module#LearningModule' },
  { path: 'statistics', loadChildren: './modules/statistics/statistics.module#StatisticsModule' },
  { path: 'auth', loadChildren: './modules/auth/auth.module#AuthModule' }
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
