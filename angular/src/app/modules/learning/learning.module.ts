import { LearningComponent } from './learning.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './start/start.component';
import { ProgressComponent } from './progress/progress.component';
import { LearningRoutingModule } from './learning-routing.module';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  declarations: [LearningComponent, StartComponent, ProgressComponent],
  imports: [
    CommonModule,
    SharedModule,
    LearningRoutingModule
  ]
})
export class LearningModule {}
