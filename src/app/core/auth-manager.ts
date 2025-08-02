import { inject, Injectable, signal } from '@angular/core';

import { GoogleUser } from '../shared/interfaces/google-user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthManager {
  private readonly http = inject(HttpClient);

  user = signal<GoogleUser | null>(null);
  token = signal<string | null>(null);

  loadFromStorage() {
    const token = localStorage.getItem('access_token');
    const user = localStorage.getItem('user');

    if (token && user) {
      this.token.set(token);
      this.user.set(JSON.parse(user));
    }
  }

  saveAuth(token: string, user: GoogleUser) {
    this.token.set(token);
    this.user.set(user);
    localStorage.setItem('access_token', token);
    localStorage.setItem('user', JSON.stringify(user));
  }

  fetchUserProfile(token: string) {
    return this.http.get<GoogleUser>('https://www.googleapis.com/oauth2/v3/userinfo', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  logout() {
    this.token.set(null);
    this.user.set(null);
    localStorage.clear();
  }
}
