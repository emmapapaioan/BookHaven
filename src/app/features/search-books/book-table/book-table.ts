import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { GoogleBook, VolumeInfo } from '../../../shared/interfaces/google-books';
import { langRestrictOptions } from '../../../shared/constants/search-filter-options';

@Component({
  selector: 'app-book-table',
  standalone: true,
  imports: [MatTableModule, MatSortModule, MatPaginatorModule],
  templateUrl: './book-table.html',
  styleUrls: ['./book-table.scss'],
})
export class BookTable implements AfterViewInit {
  @Input() books: GoogleBook[] = [];

  displayedColumns: string[] = [
    'title',
    'authors',
    'averageRating',
    'language',
    'publishedDate',
    'categories',
    'infoLink',
    'previewLink',
  ];
  languages = langRestrictOptions;
  dataSource = new MatTableDataSource<VolumeInfo>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit() {
    // initialize data
    this.dataSource.data = this.books.map(book => book.volumeInfo);
  }

  getLanguageLabel(value: string) {
    return this.languages.find(language => language.value == value)?.label ?? '-';
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnChanges(): void {
    // If input changes, update dataSource
    this.dataSource.data = this.books.map(book => book.volumeInfo);
  }
}
