import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartComponent } from './start.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LearningRoutingModule } from '../learning-routing.module';
import { LearningComponent } from '../learning.component';
import { ProgressComponent } from '../progress/progress.component';
import { SharedModule } from 'app/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { LearningEffects } from '../store/learning.effects';
import { learningReducer } from '../store/learning.reducers';
import { RouterTestingModule } from '@angular/router/testing';


describe('StartComponent', () => {
  let component: StartComponent;
  let fixture: ComponentFixture<StartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartComponent, LearningComponent, ProgressComponent ],
      imports: [
        RouterTestingModule,
        CommonModule,
        FormsModule,
        SharedModule,
        LearningRoutingModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        StoreModule.forFeature('learning', learningReducer),
        EffectsModule.forFeature([LearningEffects])
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
