import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { LangTableColumns } from './lang-table.type';
import * as fromWordPairs from '../../../../modules/vocabulary/word-pairs/store/word-pairs.reducers';
import * as fromWordPairCategories from '../../../../modules/vocabulary/word-pair-categories/store/word-pair-categories.reducers';
import { Router, ActivatedRoute } from '@angular/router';
import { getAction } from '../table-form-combo.utils';

@Component({
  selector: 'app-lang-table',
  templateUrl: './lang-table.component.html',
  styleUrls: ['./lang-table.component.scss']
})
export class LangTableComponent implements OnInit {
  @Input() columns: LangTableColumns;
  @Input() tableType: string;
  @Input() tableName: string;

  tableState: Observable<fromWordPairs.State | fromWordPairCategories.State>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private langTableStore: Store<fromWordPairs.FeatureState | fromWordPairCategories.FeatureState>,
  ) { }

  ngOnInit() {
    this.tableState = this.langTableStore.select(this.tableType);
  }


  onNextPage() {
    const action = getAction(this.tableType, 'NextPage');
    this.langTableStore.dispatch(
      new action()
    )
  }

  onPreviousPage() {
    const action = getAction(this.tableType, 'PreviousPage');
    this.langTableStore.dispatch(
      new action()
    )
  }

  onFirstPage() {
    const action = getAction(this.tableType, 'FirstPage');
    this.langTableStore.dispatch(
      new action()
    )
  }

  onLastPage() {
    const action = getAction(this.tableType, 'LastPage');
    this.langTableStore.dispatch(
      new action()
    )
  }

  onPageSizeSelectionChange(value: number) {
    const action = getAction(this.tableType, 'SetPageSize');
    this.langTableStore.dispatch(
      new action(+value)
    );
  }

  onSetSort(sortColumn: string) {
    const action = getAction(this.tableType, 'SetSort');
    this.langTableStore.dispatch(
      new action(sortColumn)
    );
  }

  onSelectRow(index: number, itemId: number) {
    const action = getAction(this.tableType, 'SetSelectedRow')
    this.langTableStore.dispatch(
      new action(index)
    );

    this.router.navigate([`${itemId}`], { relativeTo: this.route});
  }

  onAddNew() {
    const action = getAction(this.tableType, 'SetSelectedRow')
    this.langTableStore.dispatch(
      new action('new')
    );

    this.router.navigate(['new'], { relativeTo: this.route});
  }
}
