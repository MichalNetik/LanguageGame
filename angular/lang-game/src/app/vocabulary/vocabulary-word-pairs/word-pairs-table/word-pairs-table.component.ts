import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromWordPairs from '../store/word-pairs.reducers';
import * as WordPairsActions from '../store/word-pairs.actions';

import { PaginationUrlParamsModel } from '../../../shared/models/pagination-url-params.model';
import * as CategoriesActions from '../../vocabulary-categories/store/vocabulary-categories.actions';
import * as fromCategories from '../../vocabulary-categories/store/vocabulary-categories.reducers';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-word-pairs-table',
  templateUrl: './word-pairs-table.component.html',
  styleUrls: ['./word-pairs-table.component.scss']
})
export class WordPairsTableComponent implements OnInit, OnDestroy {
  wordPairsState: Observable<fromWordPairs.State>;
  columns: {
    name: string, displayName: string, property?: string,
    sortable: boolean, width: string
  }[];

  urlParams: PaginationUrlParamsModel;
  categoriesState: Observable<fromCategories.State>;
  subscription: Subscription;
  categorySelected = 'all';

  constructor(
    private wordPairsStore: Store<fromWordPairs.FeatureState>,
    private categoriesStore: Store<fromCategories.FeatureState>
  ) { }

  ngOnInit() {
    this.wordPairsState = this.wordPairsStore.select('wordPairsPagination');

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

    this.subscription = this.wordPairsStore.select('wordPairsPagination')
      .subscribe(
        (data: fromWordPairs.State) => {
          this.urlParams = data.urlParams;
        }
      );

    this.categoriesState = this.categoriesStore.select('categories')

    this.categoriesStore.dispatch(
      new CategoriesActions.FetchCategories()
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onNextPage() {
    this.wordPairsStore.dispatch(
      new WordPairsActions.NextPageWordPairs()
    )
  }

  onPreviousPage() {
    this.wordPairsStore.dispatch(
      new WordPairsActions.PreviousPageWordPairs()
    )
  }

  onFirstPage() {
    this.wordPairsStore.dispatch(
      new WordPairsActions.FirstPageWordPairs()
    )
  }

  onLastPage() {
    this.wordPairsStore.dispatch(
      new WordPairsActions.LastPageWordPairs()
    )
  }

  onPageSizeSelectionChange(value: number) {
    this.wordPairsStore.dispatch(
      new WordPairsActions.SetPageSizeWordPairs(+value)
    );
  }

  onSetSort(sortColumn: string) {
    this.wordPairsStore.dispatch(
      new WordPairsActions.SetSortWordPairs(sortColumn)
    );
  }

  loadData() {
    this.wordPairsStore.dispatch(
      new WordPairsActions.SetFilter(
        { filterColumn: 'category', filterValue: this.categorySelected }
      )
    )

    this.wordPairsStore.dispatch(
      new WordPairsActions.FetchWordPairs(this.urlParams)
    );
  }
}
