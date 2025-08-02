import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthManager } from '../../core/auth-manager';

@Component({
  selector: 'app-auth-callback',
  standalone: true,
  imports: [],
  templateUrl: './auth-callback.html',
  styleUrls: ['./auth-callback.scss']
})
export class AuthCallback {
  private router = inject(Router);
  private auth = inject(AuthManager);

  ngOnInit() {
    const fragment = new URLSearchParams(window.location.hash.slice(1));
    const token = fragment.get('access_token');

    if (!token) {
      this.router.navigate(['/login']);
      return;
    }

    this.auth.fetchUserProfile(token).subscribe({
      next: (user) => {
        this.auth.saveAuth(token, user);
        this.router.navigate(['/home']);
      },
      error: () => this.router.navigate(['/dashboard']),
    });
  }
}
