import { Component, OnChanges, Input } from '@angular/core';
import { FormGeneratorModel, FormGeneratorFieldInterface, FieldType } from './form-generator.model';
import * as fromWordPairs from '../../../../modules/vocabulary/word-pairs/store/word-pairs.reducers';
import * as fromWordPairCategories from '../../../../modules/vocabulary/word-pair-categories/store/word-pair-categories.reducers';
import { Store } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';
import { getAction } from '../table-form-combo.utils';

@Component({
  selector: 'app-form-generator',
  templateUrl: './form-generator.component.html',
  styleUrls: ['./form-generator.component.scss']
})
export class FormGeneratorComponent implements OnChanges {
  @Input() formName: string;
  @Input() formType: string;
  @Input() formData: FormGeneratorFieldInterface[];
  formModel: FormGeneratorModel;

  constructor(
    private formGeneratorStore: Store<fromWordPairs.FeatureState | fromWordPairCategories.FeatureState>,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnChanges() {
    this.formModel = new FormGeneratorModel(this.formData);
  }

  onSubmit() {
    const action = getAction(this.formType, 'SaveForm');
    this.formGeneratorStore.dispatch(
      new action(this.formModel.form.value)
    );
    this.router.navigate(['../'], { relativeTo: this.route});
  }

  onDelete() {
    const action = getAction(this.formType, 'DeleteForm');
    this.formGeneratorStore.dispatch(
      new action(this.formModel.form.value.id)
    );
    this.router.navigate(['../'], { relativeTo: this.route});
  }
}
