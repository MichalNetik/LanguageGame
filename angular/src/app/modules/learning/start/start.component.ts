import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import * as fromLearning from '../store/learning.reducers';
import * as LearningActions from '../store/learning.actions';
import { WordPairCategoryModel } from 'app/shared/models/word-pair-category.model';


@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit, OnDestroy {
  wordPairCategories: WordPairCategoryModel[] = [];
  selectedCategory: number;
  selectedLearningDir = 'tra-org';
  learningStateSubscription: Subscription;

  constructor(
    private learningStore: Store<fromLearning.State>
  ) { }

  ngOnInit() {
    this.learningStore.dispatch(
      new LearningActions.FetchCategories()
    );

    this.learningStateSubscription = this.learningStore.select('learning').subscribe(
      (data: fromLearning.State) => {
        this.wordPairCategories = data.wordPairCategories;
        this.selectedCategory = data.wordPairCategories.length > 0 ? this.wordPairCategories[0].id :  null;
      }
    );
  }

  ngOnDestroy() {
    this.learningStateSubscription.unsubscribe();
  }
}
