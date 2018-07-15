import { Component, OnChanges, Input } from '@angular/core';
import { FormGeneratorModel, FormGeneratorFieldInterface, FieldType } from './form-generator.model';
import * as fromWordPairs from '../../../modules/vocabulary/word-pairs/store/word-pairs.reducers';
import * as WordPairsActions from '../../../modules/vocabulary/word-pairs/store/word-pairs.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-form-generator',
  templateUrl: './form-generator.component.html',
  styleUrls: ['./form-generator.component.scss']
})
export class FormGeneratorComponent implements OnChanges {
  @Input() formName: string;

  @Input() formData: FormGeneratorFieldInterface[];
  formModel: FormGeneratorModel;

  constructor(private formGeneratorStore: Store<fromWordPairs.FeatureState>) { }

  ngOnChanges() {
    this.formModel = new FormGeneratorModel(this.formData);
  }

  onSubmit() {
    this.formGeneratorStore.dispatch(
      new WordPairsActions.SaveForm(this.formModel.form.value)
    );
  }
}
