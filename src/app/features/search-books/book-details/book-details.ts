import { ChangeDetectionStrategy, Component, inject, Inject, Input } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

import { GoogleBook } from '../../../shared/interfaces/google-books';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatTooltipModule, MatSnackBarModule],
  templateUrl: './book-details.html',
  styleUrls: ['./book-details.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookDetails {
  @Input() book: GoogleBook | undefined;
  @Input() viewMode: 'default' | 'withImage' | 'list' = 'default';

  defaultCover = 'images/default-cover.png';

  private snackBar = inject(MatSnackBar);

  showInfo(infoLink: string | undefined): void {
    if (!infoLink) {
      this.snackBar.open('No info link available', 'OK', { duration: 2500 });
      return;
    }
    window.open(infoLink, '_blank');
  }

  showPreview(previewLink: string | undefined): void {
    if (!previewLink) {
      this.snackBar.open('No preview available', 'OK', { duration: 2500 });
      return;
    }
    window.open(previewLink, '_blank');
  }

}
