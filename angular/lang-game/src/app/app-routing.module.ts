import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VocabularyComponent } from './vocabulary/vocabulary.component';
import { LearningComponent } from './learning/learning.component';
import { StatisticsComponent } from './statistics/statistics.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/vocabulary', pathMatch: 'full' },
  { path: 'vocabulary', component: VocabularyComponent },
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
