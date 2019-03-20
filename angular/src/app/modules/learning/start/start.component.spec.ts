import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartComponent } from './start.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LearningRoutingModule } from '../learning-routing.module';
import { LearningComponent } from '../learning.component';
import { ProgressComponent } from '../progress/progress.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { LearningEffects } from '../store/learning.effects';
import { learningReducer } from '../store/learning.reducers';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { WordPairCategoriesHttpService } from 'app/shared/services/word-pair-categories-http.service';
import { WordPairsHttpService } from 'app/shared/services/word-pairs-http.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { wordPairCategoriesData } from 'app/shared/data/word-pair-categories.data';


describe('StartComponent', () => {
  let component: StartComponent;
  let fixture: ComponentFixture<StartComponent>;
  let httpTestingController: HttpTestingController;
  let wordPairCategoriesService: WordPairCategoriesHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ StartComponent, LearningComponent, ProgressComponent ],
      providers: [
        WordPairCategoriesHttpService,
        WordPairsHttpService
      ],
      imports: [
        RouterTestingModule,
        CommonModule,
        FormsModule,
        LearningRoutingModule,
        HttpClientModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        StoreModule.forFeature('learning', learningReducer),
        EffectsModule.forFeature([LearningEffects]),
        HttpClientTestingModule
      ]
    });

    httpTestingController = TestBed.get(HttpTestingController);
    wordPairCategoriesService = TestBed.get(WordPairCategoriesHttpService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();

    const req = httpTestingController.expectOne('/api/vocabulary-category/');
    expect(req.request.method).toEqual('GET');
    req.flush(wordPairCategoriesData);
  });

  it('should display data', () => {
    const req = httpTestingController.expectOne('/api/vocabulary-category/');
    expect(req.request.method).toEqual('GET');
    req.flush(wordPairCategoriesData);
    fixture.detectChanges();

    // TODO: finish properly this test
  });
});
