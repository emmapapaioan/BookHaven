import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GoogleBooks } from '../shared/interfaces/google-books-list';

@Injectable({
  providedIn: 'root'
})
export class GoogleBooksApi {
  private http = inject(HttpClient);

  searchBooks(query: string): Observable<GoogleBooks> {
    return this.http.get<GoogleBooks>(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
  }
}
