import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';

import { GoogleBooksApi } from '../../core/google-books-api';
import { GoogleBooksStore } from '../../core/google-books-store';
import { GoogleBook } from '../../shared/interfaces/google-books';
import { BookDetails } from './book-details/book-details';
import { AdvancedSearchFilters } from './advanced-search-filters/advanced-search-filters';
import { SearchFilters } from '../../shared/interfaces/search-filter';
import { BookTable } from './book-table/book-table';

@Component({
  selector: 'app-search-books',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatPaginatorModule,
    MatButtonToggleModule,
    MatExpansionModule,
    MatSelectModule,
    AdvancedSearchFilters,
    BookDetails,
    BookTable,
  ],
  templateUrl: './search-books.html',
  styleUrls: ['./search-books.scss']
})
export class SearchBooks {
  private googleBooksStore = inject(GoogleBooksStore);
  private googleBooksApi = inject(GoogleBooksApi);
  googleBooks: GoogleBook[] = [];
  isSearchLoading: boolean = false;
  isLoadMoreLoading: boolean = false;
  hasMoreBooks: boolean = true;
  viewMode: 'default' | 'withImage' | 'list' = 'default';

  showSearchFilters: boolean = false;
  searchFilters = signal<SearchFilters>({});

  books = computed<GoogleBook[]>(() => this.googleBooksStore.books());

  ngOnInit() {
  }

  searchBooks() {
    this.searchFilters.update(f => ({ ...f, startIndex: 0 }));
    this.showSearchFilters = false;
    this.isSearchLoading = true;

    this.googleBooksApi.searchBooks(this.searchFilters())
      .subscribe({
        next: (res) => {
          this.googleBooksStore.setBooks(res?.items ?? []);
          this.isSearchLoading = false;
        },
        error: () => {
          this.isSearchLoading = false;
        },
      });
  }

  loadMoreBooks() {
    this.searchFilters.update(f => ({ ...f, startIndex: (f.startIndex ?? 0) + (f.maxResults ?? 10) }));
    this.isLoadMoreLoading = true;

    this.googleBooksApi.searchBooks(this.searchFilters())
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
    }
  }

  toggleSearchFilters() {
    this.showSearchFilters = !this.showSearchFilters;
  }
}
