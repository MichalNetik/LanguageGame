import { WordPairModel } from './../../../../shared/models/word-pair.model';
import { FieldType, FormGeneratorFieldInterface } from './../../../../shared/components/form-generator/form-generator.model';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromWordPairs from '../store/word-pairs.reducers';
import * as WordPairsActions from '../store/word-pairs.actions';

import * as fromWordPairCategories from '../../word-pair-categories/store/word-pair-categories.reducers';
import * as WordPairCategoriesActions from '../../word-pair-categories/store/word-pair-categories.actions';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-word-pairs-form',
  templateUrl: './word-pairs-form.component.html',
  styleUrls: ['./word-pairs-form.component.scss']
})
export class WordPairsFormComponent implements OnInit {

  formData: FormGeneratorFieldInterface[];

  constructor(
    private route: ActivatedRoute,
    private wordPairsStore: Store<fromWordPairs.FeatureState>,
    private categoriesStore: Store<fromWordPairCategories.FeatureState>
  ) { }

  ngOnInit() {
    this.wordPairsStore.select('word-pairs').subscribe(
      (data) => {
        if (data.activeFormItem) {
          this.createFormData(data.activeFormItem);
        }
      }
    )
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
