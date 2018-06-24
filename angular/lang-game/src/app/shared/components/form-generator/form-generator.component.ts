import { Component, OnInit, Input } from '@angular/core';
import { FormGeneratorModel, FormGeneratorFieldInterface, FieldType } from './form-generator.model';

@Component({
  selector: 'app-form-generator',
  templateUrl: './form-generator.component.html',
  styleUrls: ['./form-generator.component.scss']
})
export class FormGeneratorComponent implements OnInit {
  @Input() formName: string;
  formData: FormGeneratorFieldInterface[];
  formModel: FormGeneratorModel;

  constructor() { }

  ngOnInit() {
    this.formData = [
      {label: 'Base', name: 'base', 'validators': ['required'], fieldType: FieldType.STANDARD_INPUT_FIELD, value: ''},
      {label: 'Translated', name: 'translated', 'validators': ['required'], fieldType: FieldType.STANDARD_INPUT_FIELD, value: ''},
      {label: 'Description', name: 'description', 'validators': [], fieldType: FieldType.STANDARD_INPUT_FIELD, value: ''}
    ];

    this.formModel = new FormGeneratorModel(this.formData);
  }

}
