import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromWordPairCategories from './store/word-pair-categories.reducers';
import * as WordPairCategoriesActions from './store/word-pair-categories.actions';

@Component({
  selector: 'app-word-pair-categories',
  templateUrl: './word-pair-categories.component.html',
  styleUrls: ['./word-pair-categories.component.scss']
})
export class WordPairCategoriesComponent implements OnInit {
  categoriesState: Observable<fromWordPairCategories.State>;

  constructor(private store: Store<fromWordPairCategories.FeatureState>) { }

  ngOnInit() {
    this.categoriesState = this.store.select('categories');
    this.store.dispatch(new WordPairCategoriesActions.FetchCategories());
  }

}
