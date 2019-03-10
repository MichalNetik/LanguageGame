import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { WordPairModel } from 'app/shared/models/word-pair.model';
import { Store } from '@ngrx/store';

import * as fromLearning from '../store/learning.reducers';
import * as LearningActions from '../store/learning.actions';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit, OnDestroy {
  paramsChangedSubscription: Subscription;
  learningState: Observable<fromLearning.State>;
  wordPairs: WordPairModel[];
  currentWordPairIndex: number;
  learningDirection: string;
  valueToSubmit: string;
  comparisonResultText: string;
  counter: { correct: number, incorrect: number, total: number };
  finished: boolean;

  learningConfig = {
    'org-tra': {
      fromValue: 'base',
      toValue: 'translated',
      fromDisplayValue: 'Original',
      toDisplayValue: 'Translation'
    },
    'tra-org': {
      fromValue: 'translated',
      toValue: 'base',
      fromDisplayValue: 'Translation',
      toDisplayValue: 'Original'
    }
  }

  constructor(
    private route: ActivatedRoute,
    private learningStore: Store<fromLearning.State>,
    private router: Router
  ) { }

  ngOnInit() {
    this.counter = {
      correct: 0,
      incorrect: 0,
      total: 0
    };
    this.finished = false;

    this.paramsChangedSubscription = this.route.params.subscribe((params: Params) => {
      this.learningStore.dispatch(
        new LearningActions.FetchWordPairs({filterColumn: 'category', filterValue: params.categoryId})
      );

      this.learningDirection = params.learningDir;
    });

    this.learningStore.select('learning').subscribe(
      (data: fromLearning.State) => {
        this.wordPairs = data.wordPairs;
        this.currentWordPairIndex = 0
        this.counter.total = this.wordPairs.length;
      }
    );
  }

  ngOnDestroy() {
    this.paramsChangedSubscription.unsubscribe();
  }

  getDisplayValue(displayValueType: string) {
    return this.learningConfig[this.learningDirection][displayValueType];
  }

  getValue(valueType: string) {
    if (this.wordPairs && this.wordPairs.length > 0) {
      const wordPairKey = this.learningConfig[this.learningDirection][valueType];
      return this.wordPairs[this.currentWordPairIndex][wordPairKey];
    } else {
      return '';
    }
  }

  onLastItemSubmit() {
    if (this.currentWordPairIndex === (this.wordPairs.length - 1)) {
      this.finished = true;
    };
  }

  onSubmitButtonClick() {
    const correctValue = this.getValue('toValue');
    if (correctValue === this.valueToSubmit) {
      this.comparisonResultText = 'Correct!';
      ++this.counter.correct;
    } else {
      this.comparisonResultText = `Incorrect! Correct value: "${correctValue}".`;
      ++this.counter.incorrect;
    }

    this.onLastItemSubmit();
  }

  onNextButtonClick() {
    ++this.currentWordPairIndex;
    this.comparisonResultText = '';
    this.valueToSubmit = '';
  }

  onFinishButtonClick() {
    this.router.navigate(['/', 'learning']);
  }
}
