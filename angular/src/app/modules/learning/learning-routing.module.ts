import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './start/start.component';
import { ProgressComponent } from './progress/progress.component';
import { LearningComponent } from './learning.component';


const learningRoutes: Routes = [
  { path: '', component: LearningComponent, children: [
      { path: '', redirectTo: 'start', pathMatch: 'full' },
      { path: 'start',  component: StartComponent},
      { path: 'progress/:categoryId/:learningDir',  component: ProgressComponent}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(learningRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class LearningRoutingModule {}

