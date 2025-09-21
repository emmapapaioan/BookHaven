import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { GoogleBooks } from '../shared/interfaces/google-books';
import { SearchFilters } from '../shared/interfaces/search-filter';
import { ApiHelper } from './api-helper';

@Injectable({
  providedIn: 'root'
})
export class GoogleBooksApi {
  private http = inject(HttpClient);
  private apiHelper = inject(ApiHelper);

  searchBooks(searchFilters: SearchFilters): Observable<GoogleBooks> {
    const params = this.apiHelper.setSearchBooksParams(searchFilters);
    return this.http.get<GoogleBooks>('https://www.googleapis.com/books/v1/volumes', { params });
  }
}
