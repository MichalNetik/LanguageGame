import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable ,  Subscription } from 'rxjs';

import { LangTableColumns } from '../../../../shared/components/table-form-combo/lang-table/lang-table.type';
import * as fromWordPairs from '../store/word-pairs.reducers';
import * as WordPairsActions from '../store/word-pairs.actions';

import * as fromWordPairCategories from '../../word-pair-categories/store/word-pair-categories.reducers';
import * as WordPairCategoriesActions from '../../word-pair-categories/store/word-pair-categories.actions';

import { PaginationUrlParamsModel } from '../../../../shared/models/pagination-url-params.model';

@Component({
  selector: 'app-word-pairs-table',
  templateUrl: './word-pairs-table.component.html',
  styleUrls: ['./word-pairs-table.component.scss']
})
export class WordPairsTableComponent implements OnInit, OnDestroy {
  wordPairsState: Observable<fromWordPairs.State>;
  columns: LangTableColumns;

  urlParams: PaginationUrlParamsModel;
  categoriesState: Observable<fromWordPairCategories.State>;
  subscription: Subscription;
  categorySelected = 'all';

  constructor(
    private wordPairsStore: Store<fromWordPairs.FeatureState>,
    private categoriesStore: Store<fromWordPairCategories.FeatureState>
  ) { }

  ngOnInit() {
    this.wordPairsState = this.wordPairsStore.select('word-pairs');

    this.columns = [
      {
        name: 'base',
        displayName: 'Base',
        sortable: true,
        width: '25%'
      },
      {
        name: 'translated',
        displayName: 'Translated',
        sortable: true,
        width: '25%'
      },
      {
        name: 'description',
        displayName: 'Description',
        sortable: false,
        width: '30%'
      },
      {
        name: 'category',
        property: 'name',
        displayName: 'Category',
        sortable: true,
        width: '20%'
      }
    ]

    this.subscription = this.wordPairsStore.select('word-pairs')
      .subscribe(
        (data: fromWordPairs.State) => {
          this.urlParams = data.urlParams;
        }
      );

    this.categoriesState = this.categoriesStore.select('word-pair-categories')

    this.categoriesStore.dispatch(
      new WordPairCategoriesActions.FetchData({})
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  loadData() {
    this.wordPairsStore.dispatch(
      new WordPairsActions.SetFilter(
        { filterColumn: 'category', filterValue: this.categorySelected }
      )
    )

    this.wordPairsStore.dispatch(
      new WordPairsActions.FetchData(this.urlParams)
    );
  }
}
