import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { GoogleBooks } from '../shared/interfaces/google-books-list';
import { SearchFilters } from '../shared/interfaces/search-filter';

@Injectable({
  providedIn: 'root'
})
export class GoogleBooksApi {
  private http = inject(HttpClient);

  // TODO: Refactor to use only searchFilters
  searchBooks(query: string, maxResults: number, startIndex: number, searchFilters?: SearchFilters): Observable<GoogleBooks> {
    let params = new HttpParams();

    if (searchFilters) {
      Object.entries(searchFilters).forEach(([key, value]) => {
        (value) && (params = params.set(key, value));
      });
    }

    params = params.set('q', query);
    params = params.set('maxResults', maxResults);
    params = params.set('startIndex', startIndex);
    
    return this.http.get<GoogleBooks>('https://www.googleapis.com/books/v1/volumes', { params });
  }
}
