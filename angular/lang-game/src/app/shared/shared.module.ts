import { NgModule } from '@angular/core';
import { VocabularyHttpService } from './services/vocabulary-http.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  exports: [HttpClientModule],
  providers: [VocabularyHttpService]
})
export class SharedModule {}
