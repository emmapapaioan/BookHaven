import { TestBed } from '@angular/core/testing';

import { GoogleBooksStore } from './google-books-store';

describe('GoogleBooksStore', () => {
  let service: GoogleBooksStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoogleBooksStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
