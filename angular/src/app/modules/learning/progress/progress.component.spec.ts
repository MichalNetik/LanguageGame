import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { Location } from '@angular/common';
import { ProgressComponent } from './progress.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { learningRoutes } from '../learning-routing.module';
import { LearningComponent } from '../learning.component';
import { StartComponent } from '../start/start.component';
import { learningReducer } from '../store/learning.reducers';
import { LearningEffects } from '../store/learning.effects';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { HttpClientTestingModule,
  HttpTestingController } from '@angular/common/http/testing';
import { WordPairsHttpService } from 'app/shared/services/word-pairs-http.service';
import { HttpClientModule } from '@angular/common/http';
import { WordPairCategoriesHttpService } from 'app/shared/services/word-pair-categories-http.service';
import { wordPairsData } from 'app/shared/data/word-pairs.data';
import { of } from 'rxjs';

describe('ProgressComponent', () => {
  let component: ProgressComponent;
  let fixture: ComponentFixture<ProgressComponent>;
  let router: Router;
  let httpTestingController: HttpTestingController;
  let wordPairsService: WordPairsHttpService;
  let location: Location;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressComponent, LearningComponent, StartComponent ],
      providers: [
        WordPairsHttpService,
        WordPairCategoriesHttpService,
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({categoryId: 1, learningDir: 'org-tra'}),
          },
        },
      ],
      imports: [
        RouterModule.forRoot(learningRoutes),
        CommonModule,
        FormsModule,
        HttpClientModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        StoreModule.forFeature('learning', learningReducer),
        EffectsModule.forFeature([LearningEffects]),
        HttpClientTestingModule
      ]
    })

    httpTestingController = TestBed.get(HttpTestingController);
    wordPairsService = TestBed.get(WordPairsHttpService);

    router = TestBed.get(Router);
    location = TestBed.get(Location);

    fixture = TestBed.createComponent(ProgressComponent);
    fixture.detectChanges();
    fixture.ngZone.run(() => {
      router.initialNavigation();
    });

  });

  it('should create', () => {
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should navigate to category 1', fakeAsync(() => {
    fixture.ngZone.run(() => {

      router.navigate(['progress', '1', 'org-tra']).then(() => {
        expect(location.path()).toBe('/progress/1/org-tra');

        const req = httpTestingController.expectOne('/api/word-pair/?filterColumn=category&filterValue=1');
        expect(req.request.method).toEqual('GET');
        req.flush(wordPairsData);

        fixture.detectChanges();

        const componentHtml: HTMLElement = fixture.nativeElement;
        const selectedItems: HTMLInputElement[] = <any>componentHtml.querySelectorAll('.progress-container__input');
        expect(selectedItems[0].value).toBe('cat');
        expect(selectedItems[1].value).toBe('');

        const totalElem = componentHtml.querySelector('.progress-container__nav-panel--total');
        expect(totalElem.textContent).toBe('Total: 1/13');
      });
    });
  }));
});
