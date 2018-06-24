import { LangTableColumns } from './../../../shared/components/lang-table/lang-table.type';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromWordPairCategoriesTable from './store/word-pair-categories.reducers';
import * as WordPairCategoriesActions from './store/word-pair-categories.actions';


@Component({
  selector: 'app-word-pair-categories',
  templateUrl: './word-pair-categories.component.html',
  styleUrls: ['./word-pair-categories.component.scss']
})
export class WordPairCategoriesComponent implements OnInit {
  categoriesState: Observable<fromWordPairCategoriesTable.State>;
  tableType = 'word-pair-categories';
  columns: LangTableColumns;

  constructor(private store: Store<fromWordPairCategoriesTable.FeatureState>) { }

  ngOnInit() {
    this.categoriesState = this.store.select(this.tableType);
    this.store.dispatch(new WordPairCategoriesActions.FetchData({}));

    this.columns = [
      {
        name: 'name',
        displayName: 'Name',
        sortable: true,
        width: '50%'
      },
      {
        name: 'description',
        displayName: 'Description',
        sortable: true,
        width: '50%'
      },
    ];
  }

}
