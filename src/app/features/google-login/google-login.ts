import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-google-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './google-login.html',
  styleUrls: ['./google-login.scss'],
})
export class GoogleLogin {
  user: any = null;
  google: any;

  signInWithGoogle() {
    const clientId = '925914486320-lrhej1a8iv3vdh4fcs3gh37ckt18i9m2.apps.googleusercontent.com';
    const redirectUri = 'http://localhost:4200/auth-callback'; 
    const scope = 'openid email profile';
    const state = crypto.randomUUID(); // for CSRF protection, optional

    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?response_type=token&client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scope)}&state=${state}`;

    // Redirect the user to Google's OAuth2 flow
    window.location.href = authUrl;
  }
}
