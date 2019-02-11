import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromLearning from '../store/learning.reducers';
import * as LearningActions from '../store/learning.actions';


@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
  learningState: Observable<fromLearning.State>;


  constructor(
    private learningStore: Store<fromLearning.State>
  ) { }

  ngOnInit() {
    this.learningStore.dispatch(
      new LearningActions.FetchCategories()
    );

    this.learningState = this.learningStore.select('learning')
  }

}
