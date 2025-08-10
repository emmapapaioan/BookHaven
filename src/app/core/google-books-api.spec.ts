import { TestBed } from '@angular/core/testing';

import { GoogleBooksApi } from './google-books-api';

describe('GoogleBooksApi', () => {
  let service: GoogleBooksApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoogleBooksApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
