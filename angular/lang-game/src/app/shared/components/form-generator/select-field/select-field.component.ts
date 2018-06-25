import { FormGeneratorFieldInterface } from './../form-generator.model';
import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-select-field',
  templateUrl: './select-field.component.html',
  styleUrls: ['./select-field.component.scss']
})
export class SelectFieldComponent implements OnInit {
  @Input() options: { id: string | number, name: string, [key: string]: any}
  @Input() fieldData: FormGeneratorFieldInterface;
  @Input() fieldFormControl: FormControl;

  optionSelected: string | number = 'all';

  constructor() { }

  ngOnInit() {
  }

}
