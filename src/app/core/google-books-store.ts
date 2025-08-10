import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { GoogleBook } from '../shared/interfaces/google-books-list';

@Injectable({
  providedIn: 'root'
})
export class GoogleBooksStore {
  googleBooks$ = new BehaviorSubject<GoogleBook[]>([]);

  setGoogleBooks(googleBooks: GoogleBook[]): void {
    this.googleBooks$.next(googleBooks);
  }

  getGoogleBooks(): Observable<GoogleBook[]> {
    return this.googleBooks$.asObservable();
  }
}
