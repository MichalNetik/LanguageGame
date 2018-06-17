import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromLangTable from '../../../../shared/components/lang-table/store/lang-table.reducers';
import * as LangTableActions from '../../../../shared/components/lang-table/store/lang-table.actions';

import { PaginationUrlParamsModel } from '../../../../shared/models/pagination-url-params.model';
import * as WordPairCategoriesActions from '../../word-pair-categories/store/word-pair-categories.actions';
import * as fromCategories from '../../word-pair-categories/store/word-pair-categories.reducers';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-word-pairs-table',
  templateUrl: './word-pairs-table.component.html',
  styleUrls: ['./word-pairs-table.component.scss']
})
export class WordPairsTableComponent implements OnInit, OnDestroy {
  wordPairsState: Observable<fromLangTable.State>;
  columns: {
    name: string, displayName: string, property?: string,
    sortable: boolean, width: string
  }[];

  urlParams: PaginationUrlParamsModel;
  categoriesState: Observable<fromCategories.State>;
  subscription: Subscription;
  categorySelected = 'all';

  constructor(
    private wordPairsStore: Store<fromLangTable.FeatureState>,
    private categoriesStore: Store<fromCategories.FeatureState>
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
        (data: fromLangTable.State) => {
          this.urlParams = data.urlParams;
        }
      );

    this.categoriesState = this.categoriesStore.select('word-pair-categories')

    this.categoriesStore.dispatch(
      new WordPairCategoriesActions.FetchCategories()
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  loadData() {
    this.wordPairsStore.dispatch(
      new LangTableActions.SetFilter(
        { filterColumn: 'category', filterValue: this.categorySelected }
      )
    )

    this.wordPairsStore.dispatch(
      new LangTableActions.FetchData(this.urlParams)
    );
  }
}
