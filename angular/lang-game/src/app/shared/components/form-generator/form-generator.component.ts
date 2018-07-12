import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormGeneratorModel, FormGeneratorFieldInterface, FieldType } from './form-generator.model';

@Component({
  selector: 'app-form-generator',
  templateUrl: './form-generator.component.html',
  styleUrls: ['./form-generator.component.scss']
})
export class FormGeneratorComponent implements OnChanges {
  @Input() formName: string;

  @Input() formData: FormGeneratorFieldInterface[];
  formModel: FormGeneratorModel;

  constructor() { }

  ngOnChanges() {

    this.formModel = new FormGeneratorModel(this.formData);
  }

}
