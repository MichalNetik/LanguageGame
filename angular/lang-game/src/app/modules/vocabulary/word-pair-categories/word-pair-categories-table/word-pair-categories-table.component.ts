import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  LangTableColumns
} from '../../../../shared/components/table-form-combo/lang-table/lang-table.type';
import * as fromWordPairCategoriesTable from '../store/word-pair-categories.reducers';
import * as WordPairCategoriesActions from '../store/word-pair-categories.actions';


@Component({
  selector: 'app-word-pair-categories-table',
  templateUrl: './word-pair-categories-table.component.html',
  styleUrls: ['./word-pair-categories-table.component.scss']
})
export class WordPairCategoriesTableComponent implements OnInit {
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
