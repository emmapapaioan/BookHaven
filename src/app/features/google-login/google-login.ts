import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { GOOGLE_AUTH_CONFIG } from '../../config/google-auth-config';
import { GoogleUser } from '../../shared/interfaces/google-user';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-google-login',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './google-login.html',
  styleUrls: ['./google-login.scss'],
})
export class GoogleLogin {
  @Input() isHeader: boolean = false;
  private config = inject(GOOGLE_AUTH_CONFIG);
  user: GoogleUser | null = null;

  signInWithGoogle() {
    const clientId = this.config.clientId;
    const redirectUri = this.config.redirectUri;
    const scope = 'openid email profile';
    const state = crypto.randomUUID(); // for CSRF protection, optional

    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?response_type=token&client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scope)}&state=${state}`;

    // Redirect the user to Google's OAuth2 flow
    window.location.href = authUrl;
  }
}
