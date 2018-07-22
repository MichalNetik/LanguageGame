import { ISelectField } from './../form-generator.type';
import { FormGeneratorFieldInterface } from './../form-generator.model';
import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-select-field',
  templateUrl: './select-field.component.html',
  styleUrls: ['./select-field.component.scss']
})
export class SelectFieldComponent implements OnInit {
  @Input() options: ISelectField[]
  @Input() fieldData: FormGeneratorFieldInterface;
  @Input() fieldFormControl: FormControl;

  optionSelected: number;

  constructor() { }

  ngOnInit() {
  }

  compare(val1: ISelectField, val2: ISelectField) {
    return val1.id === val2.id;
  }
}
