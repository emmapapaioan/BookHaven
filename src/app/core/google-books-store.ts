import { Injectable, signal } from '@angular/core';
import { GoogleBook } from '../shared/interfaces/google-books';

@Injectable({
  providedIn: 'root'
})
export class GoogleBooksStore {
  books = signal<GoogleBook[]>([]);

  /* Apply filtering only when lang is provided */
  private filterByLanguage(books: GoogleBook[], lang?: string): GoogleBook[] {
    if (!lang) return books;
    return books.filter(b => b.volumeInfo?.language === lang);
  }

  /**
   * Sets books, optionally filtered by language.
   * Example:
   * setBooks(books, 'el'); // keep only Greek
   * setBooks(books);       // no filtering
   */
  setBooks(googleBooks: GoogleBook[], lang?: string): void {
    const filtered = this.filterByLanguage(googleBooks, lang);
    this.books.set(filtered);
  }

  /**
   * Adds books, optionally filtered by language.
   */
  addBooks(googleBooks: GoogleBook[], lang?: string): void {
    const filtered = this.filterByLanguage(googleBooks, lang);
    this.books.update(prev => [...prev, ...filtered]);
  }

  clearBooks(): void {
    this.books.set([]);
  }
}
