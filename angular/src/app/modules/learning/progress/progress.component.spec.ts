import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressComponent } from './progress.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { learningRoutes } from '../learning-routing.module';
import { LearningComponent } from '../learning.component';
import { StartComponent } from '../start/start.component';
import { learningReducer } from '../store/learning.reducers';
import { LearningEffects } from '../store/learning.effects';
import { SharedModule } from 'app/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';


describe('ProgressComponent', () => {
  let component: ProgressComponent;
  let fixture: ComponentFixture<ProgressComponent>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressComponent, LearningComponent, StartComponent ],
      imports: [
        RouterTestingModule.withRoutes(learningRoutes),
        CommonModule,
        FormsModule,
        SharedModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        StoreModule.forFeature('learning', learningReducer),
        EffectsModule.forFeature([LearningEffects])
      ]
    })
    .compileComponents().then(
      () => {
        router = TestBed.get(Router);
        router.initialNavigation();
        return router.navigate(['progress', '1', 'org-tra']);
      }
    );
  }));

  it('should create', () => async(() => {
    fixture = TestBed.createComponent(ProgressComponent);
    fixture.detectChanges();
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  }));
});
