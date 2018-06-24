import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export enum FieldType {
  STANDARD_INPUT_FIELD = 'standard-input-field',
  SELECT_FIELD = 'select-field',
}

export class FormGeneratorFieldInterface {
  label: string;
  name: string;
  value: string | number;
  validators: string[];
  fieldType: FieldType
}


export class FormGeneratorModel {
  data: FormGeneratorFieldInterface[];
  formBuilder: FormBuilder;
  form: FormGroup;

  constructor(data: FormGeneratorFieldInterface[]) {
    this.data = data;
    this.formBuilder = new FormBuilder();

    this.form = this.createForm();
  }

  createForm() {
    const controls: any = {};
    for (const item of this.data) {
      controls[item.name] = [
        item.value,
        item.validators.forEach(validator => Validators[validator])
      ]
    }
    return this.formBuilder.group(controls);
  }
}
