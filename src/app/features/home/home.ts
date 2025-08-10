import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { AuthManager } from '../../core/auth-manager';
import { GoogleLogin } from '../google-login/google-login';
import { GoogleBook } from '../../shared/interfaces/google-books-list';
import { BehaviorSubject } from 'rxjs';
import { GoogleBooksStore } from '../../core/google-books-store';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, GoogleLogin, MatIconModule, FormsModule, MatListModule],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class Home {
  protected auth = inject(AuthManager);
  private googleBooksStore = inject(GoogleBooksStore);

  // Use computed signal to know if user is logged in
  readonly isLoggedIn = computed(() => !!this.auth.user());
  readonly user = this.auth.user;

  books$: BehaviorSubject<GoogleBook[]> = new BehaviorSubject<GoogleBook[]>([]);

  constructor() { }

  ngOnInit() {
    this.books$ = this.googleBooksStore.googleBooks$;
  }
}

