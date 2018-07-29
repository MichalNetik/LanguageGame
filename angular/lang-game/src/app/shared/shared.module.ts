import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { VocabularyHttpService } from './services/vocabulary-http.service';
import { HttpClientModule } from '@angular/common/http';
import { LangTableComponent } from './components/table-form-combo/lang-table/lang-table.component';
import { FormGeneratorComponent } from './components/table-form-combo/form-generator/form-generator.component';
import {
  StandardInputFieldComponent
} from './components/table-form-combo/form-generator/standard-input-field/standard-input-field.component';
import { SelectFieldComponent } from './components/table-form-combo/form-generator/select-field/select-field.component';

@NgModule({
  declarations: [
    LangTableComponent,
    FormGeneratorComponent,
    StandardInputFieldComponent,
    SelectFieldComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule
  ],
  exports: [
    HttpClientModule,
    LangTableComponent,
    FormGeneratorComponent
  ],
  providers: [VocabularyHttpService]
})
export class SharedModule {}
