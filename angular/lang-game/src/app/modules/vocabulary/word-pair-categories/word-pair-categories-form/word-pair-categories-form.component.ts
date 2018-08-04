import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { FieldType, FormGeneratorFieldInterface } from '../../../../shared/components/table-form-combo/form-generator/form-generator.model';
import { WordPairCategoryModel } from '../../../../shared/models/word-pair-category.model';
import * as fromWordPairCategories from '../store/word-pair-categories.reducers';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-word-pair-categories-form',
  templateUrl: './word-pair-categories-form.component.html',
  styleUrls: ['./word-pair-categories-form.component.scss']
})
export class WordPairCategoriesFormComponent implements OnInit {
  formData: FormGeneratorFieldInterface[];

  constructor(
    private categoriesStore: Store<fromWordPairCategories.FeatureState>,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.categoriesStore.select('word-pair-categories').subscribe(
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

  createFormData(wordPairCategory: WordPairCategoryModel) {
    this.formData = [
      {
        label: 'Id', name: 'id', 'validators': [],
        fieldType: FieldType.STANDARD_INPUT_FIELD, value: wordPairCategory.id,
        readOnly: true
      },
      {
        label: 'Name', name: 'name', 'validators': ['required'],
        fieldType: FieldType.STANDARD_INPUT_FIELD, value: wordPairCategory.name
      },
      {
        label: 'Description', name: 'description', 'validators': [],
        fieldType: FieldType.STANDARD_INPUT_FIELD, value: wordPairCategory.description
      }
    ];
  }

}
