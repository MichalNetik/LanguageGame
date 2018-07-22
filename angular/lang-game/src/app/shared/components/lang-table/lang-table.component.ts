import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { LangTableColumns } from './lang-table.type';
import * as WordPairsActions from '../../../modules/vocabulary/word-pairs/store/word-pairs.actions';
import * as WordPairCategoriesActions from '../../../modules/vocabulary/word-pair-categories/store/word-pair-categories.actions';
import * as fromWordPairs from '../../../modules/vocabulary/word-pairs/store/word-pairs.reducers';
import * as fromWordPairCategories from '../../../modules/vocabulary/word-pair-categories/store/word-pair-categories.reducers';
import { Router, ActivatedRoute } from '@angular/router';

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

  private getAction(actionName: string) {
    switch (this.tableType) {
      case 'word-pairs':
        return WordPairsActions[actionName];
      case 'word-pair-categories':
        return WordPairCategoriesActions[actionName];
    }
  }

  ngOnInit() {
    this.tableState = this.langTableStore.select(this.tableType);
  }


  onNextPage() {
    const action = this.getAction('NextPage');
    this.langTableStore.dispatch(
      new action()
    )
  }

  onPreviousPage() {
    const action = this.getAction('PreviousPage');
    this.langTableStore.dispatch(
      new action()
    )
  }

  onFirstPage() {
    const action = this.getAction('FirstPage');
    this.langTableStore.dispatch(
      new action()
    )
  }

  onLastPage() {
    const action = this.getAction('LastPage');
    this.langTableStore.dispatch(
      new action()
    )
  }

  onPageSizeSelectionChange(value: number) {
    const action = this.getAction('SetPageSize');
    this.langTableStore.dispatch(
      new action(+value)
    );
  }

  onSetSort(sortColumn: string) {
    const action = this.getAction('SetSort');
    this.langTableStore.dispatch(
      new action(sortColumn)
    );
  }

  onSelectRow(index: number, itemId: number) {
    const action = this.getAction('SetSelectedRow')
    this.langTableStore.dispatch(
      new action(index)
    );

    this.router.navigate([`${itemId}`], { relativeTo: this.route});
  }

  onAddNew() {
    const action = this.getAction('SetSelectedRow')
    this.langTableStore.dispatch(
      new action('new')
    );

    this.router.navigate(['new'], { relativeTo: this.route});
  }
}
