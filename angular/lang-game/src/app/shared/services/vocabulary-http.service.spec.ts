import { TestBed, inject } from '@angular/core/testing';

import { VocabularyHttpService } from './vocabulary-http.service';

describe('VocabularyHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VocabularyHttpService]
    });
  });

  it('should be created', inject([VocabularyHttpService], (service: VocabularyHttpService) => {
    expect(service).toBeTruthy();
  }));
});
