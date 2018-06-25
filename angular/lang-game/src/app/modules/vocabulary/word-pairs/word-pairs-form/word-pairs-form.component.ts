import { FieldType, FormGeneratorFieldInterface } from './../../../../shared/components/form-generator/form-generator.model';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromWordPairs from '../store/word-pairs.reducers';
import * as WordPairsActions from '../store/word-pairs.actions';

import * as fromWordPairCategories from '../../word-pair-categories/store/word-pair-categories.reducers';
import * as WordPairCategoriesActions from '../../word-pair-categories/store/word-pair-categories.actions';

@Component({
  selector: 'app-word-pairs-form',
  templateUrl: './word-pairs-form.component.html',
  styleUrls: ['./word-pairs-form.component.scss']
})
export class WordPairsFormComponent implements OnInit {

  formData: FormGeneratorFieldInterface[];

  constructor(
    private wordPairsStore: Store<fromWordPairs.FeatureState>,
    private categoriesStore: Store<fromWordPairCategories.FeatureState>
  ) { }

  ngOnInit() {

    this.formData = [
      {
        label: 'Base', name: 'base', 'validators': ['required'],
        fieldType: FieldType.STANDARD_INPUT_FIELD, value: ''
      },
      {
        label: 'Translated', name: 'translated', 'validators': ['required'],
        fieldType: FieldType.STANDARD_INPUT_FIELD, value: ''
      },
      {
        label: 'Description', name: 'description', 'validators': [],
        fieldType: FieldType.STANDARD_INPUT_FIELD, value: ''
      },
      {
        label: 'Category', name: 'category', 'validators': ['required'],
        fieldType: FieldType.SELECT_FIELD, value: '',
        $optionsData: this.categoriesStore.select('word-pair-categories')
      }
    ];
  }

}
