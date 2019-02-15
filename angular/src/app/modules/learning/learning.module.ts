import { LearningComponent } from './learning.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './start/start.component';
import { ProgressComponent } from './progress/progress.component';
import { LearningRoutingModule } from './learning-routing.module';
import { SharedModule } from 'app/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { LearningEffects } from './store/learning.effects';
import { learningReducer } from './store/learning.reducers';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LearningComponent, StartComponent, ProgressComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    LearningRoutingModule,
    StoreModule.forFeature('learning', learningReducer),
    EffectsModule.forFeature([LearningEffects])
  ]
})
export class LearningModule {}
