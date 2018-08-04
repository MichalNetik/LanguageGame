import { FormGeneratorFieldInterface } from '../form-generator.model';
import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-standard-input-field',
  templateUrl: './standard-input-field.component.html',
  styleUrls: ['./standard-input-field.component.scss']
})
export class StandardInputFieldComponent implements OnInit {
  @Input() fieldData: FormGeneratorFieldInterface;
  @Input() fieldFormControl: FormControl;
  constructor() { }

  ngOnInit() {
  }

}
