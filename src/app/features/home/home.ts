import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthManager } from '../../core/auth-manager';
import { GoogleLogin } from '../google-login/google-login';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, GoogleLogin, MatIconModule],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class Home {
  protected auth = inject(AuthManager);

  // Use computed signal to know if user is logged in
  readonly isLoggedIn = computed(() => !!this.auth.user());
  readonly user = this.auth.user;

}

