import { Injectable, signal } from '@angular/core';

import { GoogleBook } from '../shared/interfaces/google-books';

@Injectable({
  providedIn: 'root'
})
export class GoogleBooksStore {
  books = signal<GoogleBook[]>([]);

  setBooks(googleBooks: GoogleBook[]): void {
    this.books.set(googleBooks);
  }

  addBooks(googleBooks: GoogleBook[]): void {
    this.books.update(prev => [...prev, ...googleBooks]);
  }

  clearBooks(): void {
    this.books.set([]);
  }
}
