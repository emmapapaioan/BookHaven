import { Component, inject } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { GoogleBooksApi } from '../../core/google-books-api';
import { GoogleBooksStore } from '../../core/google-books-store';
import { GoogleBook } from '../../shared/interfaces/google-books-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { BehaviorSubject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { BookDetails } from './book-details/book-details';

@Component({
  selector: 'app-search-books',
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatListModule,
    BookDetails,
  ],
  templateUrl: './search-books.html',
  styleUrl: './search-books.scss'
})
export class SearchBooks {
  private googleBooksStore = inject(GoogleBooksStore);
  private googleBooksApi = inject(GoogleBooksApi);
  query: string = '';
  googleBooks: GoogleBook[] = [];
  isLoading: boolean = false;

  books$: BehaviorSubject<GoogleBook[]> = new BehaviorSubject<GoogleBook[]>([]);

  ngOnInit() {
    this.books$ = this.googleBooksStore.googleBooks$;
  }

  searchBooks() {
    this.isLoading = true;

    this.googleBooksApi.searchBooks(this.query)
      .subscribe({
        next: (res) => {
          this.googleBooksStore.setGoogleBooks(res?.items ?? []);
          this.isLoading = false;
        },
        error: (error) => {
          this.isLoading = false;
          console.log(error)
        },
      });
  }
}
