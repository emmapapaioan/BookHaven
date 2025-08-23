import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { ThemeManager } from '../../core/theme-manager';
import { AuthManager } from '../../core/auth-manager';
import { GoogleLogin } from "../../features/google-login/google-login";
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    GoogleLogin,
    FormsModule,
    MatProgressSpinnerModule
],
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class Header {
  protected readonly auth = inject(AuthManager);
  private themeManager = inject(ThemeManager);

  // Use computed signal to know if user is logged in
  readonly isLoggedIn = computed(() => !!this.auth.user());
  readonly user = this.auth.user;

  logout() {
    this.auth.logout();
  }

  toggleTheme() {
    this.themeManager.toggleTheme();
  }

  onAvatarError(event: Event) {
    const img = event.target as HTMLImageElement;
    img.src = 'images/default-avatar.png'; // Fallback in case of image load error
  }
}
