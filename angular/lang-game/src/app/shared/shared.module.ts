import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LangTableComponent } from './components/table-form-combo/lang-table/lang-table.component';
import { FormGeneratorComponent } from './components/table-form-combo/form-generator/form-generator.component';
import {
  StandardInputFieldComponent
} from './components/table-form-combo/form-generator/standard-input-field/standard-input-field.component';
import { SelectFieldComponent } from './components/table-form-combo/form-generator/select-field/select-field.component';
import { WordPairsHttpService } from './services/word-pairs-http.service';
import { WordPairCategoriesHttpService } from './services/word-pair-categories-http.service';

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
  providers: [WordPairsHttpService, WordPairCategoriesHttpService]
})
export class SharedModule {}
