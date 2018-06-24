import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { VocabularyHttpService } from './services/vocabulary-http.service';
import { HttpClientModule } from '@angular/common/http';
import { LangTableComponent } from './components/lang-table/lang-table.component';

@NgModule({
  declarations: [LangTableComponent],
  imports: [
    CommonModule,
    FormsModule,
    AngularFontAwesomeModule
  ],
  exports: [HttpClientModule, LangTableComponent],
  providers: [VocabularyHttpService]
})
export class SharedModule {}
