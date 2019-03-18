import { AuthInterceptor } from './auth.interceptor';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LangTableComponent } from './components/table-form-combo/lang-table/lang-table.component';
import { FormGeneratorComponent } from './components/table-form-combo/form-generator/form-generator.component';
import {
  StandardInputFieldComponent
} from './components/table-form-combo/form-generator/standard-input-field/standard-input-field.component';
import { SelectFieldComponent } from './components/table-form-combo/form-generator/select-field/select-field.component';
import { WordPairsHttpService } from './services/word-pairs-http.service';
import { WordPairCategoriesHttpService } from './services/word-pair-categories-http.service';
import { AuthHttpService } from './services/auth-http.service';

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
    AngularFontAwesomeModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'csrftoken',
      headerName: 'X-CSRFToken'
    }),
  ],
  exports: [
    LangTableComponent,
    FormGeneratorComponent,
    AngularFontAwesomeModule
  ],
  providers: [
    WordPairsHttpService,
    WordPairCategoriesHttpService,
    AuthHttpService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
  ]
})
export class SharedModule {}
