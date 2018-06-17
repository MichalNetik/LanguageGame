import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as LangActions from './store/lang-table.actions';
import * as fromLangTable from './store/lang-table.reducers';

@Component({
  selector: 'app-lang-table',
  templateUrl: './lang-table.component.html',
  styleUrls: ['./lang-table.component.scss']
})
export class LangTableComponent implements OnInit {
  @Input() tableStore: Store<any>;
  @Input() columns: {
    name: string, displayName: string, property?: string,
    sortable: boolean, width: string
  }[]
  @Input() tableType: string;

  tableState: Observable<fromLangTable.State>;

  constructor(
    private langTableStore: Store<fromLangTable.FeatureState>,
  ) { }


  ngOnInit() {
    this.tableState = this.langTableStore.select(this.tableType);
  }


  onNextPage() {
    this.langTableStore.dispatch(
      new LangActions.NextPage()
    )
  }

  onPreviousPage() {
    this.langTableStore.dispatch(
      new LangActions.PreviousPage()
    )
  }

  onFirstPage() {
    this.langTableStore.dispatch(
      new LangActions.FirstPage()
    )
  }

  onLastPage() {
    this.langTableStore.dispatch(
      new LangActions.LastPage()
    )
  }

  onPageSizeSelectionChange(value: number) {
    this.langTableStore.dispatch(
      new LangActions.SetPageSize(+value)
    );
  }

  onSetSort(sortColumn: string) {
    this.langTableStore.dispatch(
      new LangActions.SetSort(sortColumn)
    );
  }
}
