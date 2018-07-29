import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';

import { FieldType, FormGeneratorFieldInterface } from '../../../../shared/components/table-form-combo/form-generator/form-generator.model';
import { WordPairModel } from '../../../../shared/models/word-pair.model';
import * as fromWordPairs from '../store/word-pairs.reducers';
import * as fromWordPairCategories from '../../word-pair-categories/store/word-pair-categories.reducers';

@Component({
  selector: 'app-word-pairs-form',
  templateUrl: './word-pairs-form.component.html',
  styleUrls: ['./word-pairs-form.component.scss']
})
export class WordPairsFormComponent implements OnInit {
  formData: FormGeneratorFieldInterface[];

  constructor(
    private wordPairsStore: Store<fromWordPairs.FeatureState>,
    private categoriesStore: Store<fromWordPairCategories.FeatureState>,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.wordPairsStore.select('word-pairs').subscribe(
      (data) => {
        if (data.activeFormItem) {
          this.createFormData(data.activeFormItem);
        }
      }
    )

    // decrease route indent if a user tries to refresh site with
    // form populated
    if (!this.formData) {
      this.router.navigate(['../'], { relativeTo: this.route});
    }
  }

  createFormData(wordPair: WordPairModel) {
    this.formData = [
      {
        label: 'Id', name: 'id', 'validators': [],
        fieldType: FieldType.STANDARD_INPUT_FIELD, value: wordPair.id,
        readOnly: true
      },
      {
        label: 'Base', name: 'base', 'validators': ['required'],
        fieldType: FieldType.STANDARD_INPUT_FIELD, value: wordPair.base
      },
      {
        label: 'Translated', name: 'translated', 'validators': ['required'],
        fieldType: FieldType.STANDARD_INPUT_FIELD, value: wordPair.translated
      },
      {
        label: 'Description', name: 'description', 'validators': [],
        fieldType: FieldType.STANDARD_INPUT_FIELD, value: wordPair.description
      },
      {
        label: 'Category', name: 'category', 'validators': ['required'],
        fieldType: FieldType.SELECT_FIELD, value: wordPair.category,
        $optionsData: this.categoriesStore.select('word-pair-categories')
      }
    ];
  }

}
