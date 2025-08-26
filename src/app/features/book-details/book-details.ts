import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { GoogleBook } from '../../shared/interfaces/google-books-list';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './book-details.html',
  styleUrls: ['./book-details.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookDetails {
  @Input() book: GoogleBook | undefined; 
}
