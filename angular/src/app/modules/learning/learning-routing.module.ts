import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './start/start.component';
import { ProgressComponent } from './progress/progress.component';
import { StoreModule } from '@ngrx/store';
import { learningReducer } from './store/learning.reducers';
import { EffectsModule } from '@ngrx/effects';
import { LearningEffects } from './store/learning.effects';


const learningRoutes: Routes = [
  { path: '', redirectTo: '/learning/start', pathMatch: 'full' },
  { path: 'start',  component: StartComponent},
  { path: 'progress/:categoryid',  component: StartComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(learningRoutes),
    StoreModule.forFeature('learning', learningReducer),
    EffectsModule.forFeature([LearningEffects])
  ],
  exports: [
    RouterModule
  ]
})
export class LearningRoutingModule {}

