import { Component, computed, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { AuthManager } from '../../core/auth-manager';
import { GoogleLogin } from '../google-login/google-login';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GoogleLogin, MatIconModule, FormsModule, MatListModule],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class Home {
  protected auth = inject(AuthManager);

  // Use computed signal to know if user is logged in
  readonly isLoggedIn = computed(() => !!this.auth.user());
  readonly user = this.auth.user;

  constructor() { }

  ngOnInit() {
    
  }
}

