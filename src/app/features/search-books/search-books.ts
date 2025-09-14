import { Component, computed, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatListModule } from '@angular/material/list';

import { GoogleBooksApi } from '../../core/google-books-api';
import { GoogleBooksStore } from '../../core/google-books-store';
import { GoogleBook } from '../../shared/interfaces/google-books-list';
import { BookDetails } from './book-details/book-details';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

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
    MatPaginatorModule,
    MatButtonToggleModule
  ],
  templateUrl: './search-books.html',
  styleUrl: './search-books.scss'
})
export class SearchBooks {
  private googleBooksStore = inject(GoogleBooksStore);
  private googleBooksApi = inject(GoogleBooksApi);
  query: string = '';
  googleBooks: GoogleBook[] = [];
  isSearchLoading: boolean = false;
  isLoadMoreLoading: boolean = false;
  maxResults: number = 40;
  startIndex: number = 0;
  pageIndex: number = 0;
  hasMoreBooks: boolean = true;
  
  viewMode: 'default' | 'withImage' | 'list' = 'default';

  books = computed<GoogleBook[]>(() => this.googleBooksStore.books());

  ngOnInit() {
  }

  searchBooks() {
    this.isSearchLoading = true;

    this.googleBooksApi.searchBooks(this.query, this.maxResults, this.startIndex)
      .subscribe({
        next: (res) => {
          this.googleBooksStore.setBooks(res?.items ?? []);
          this.isSearchLoading = false;
          this.startIndex +=40;
          this.pageIndex = 0;
        },
        error: () => {
          this.isSearchLoading = false;
        },
      });
  }

  loadMoreBooks() {
    this.isLoadMoreLoading = true;

    this.googleBooksApi.searchBooks(this.query, this.maxResults, this.startIndex)
      .subscribe({
        next: (res) => {
          this.handleMoreBooks(res.items);
          this.isLoadMoreLoading = false;
        },
        error: (err) => {
          console.error(err);
          this.isLoadMoreLoading = false;
        }
      });
  }

  handleMoreBooks(newBooks: GoogleBook[]) {
    if (!newBooks.length) {
      this.hasMoreBooks = false;
    } else {
      this.googleBooksStore.addBooks(newBooks);
      this.startIndex += this.maxResults;
    }
  }
}
