# BookHaven (⚠️ Work in progress)

## 📖 Description  
BookHaven is an Angular application for exploring and managing books.  

Features:  
- Search books via **Google Books API**  
- View details, prices, and related info  
- Retrieve and manage personal **Google Library shelves** (favorites, to-read, have read, etc.)  
- Google Sign-In for personalized data  

> **Note:** The file `google-auth-config.ts` (containing the OAuth Client ID) is **not included** in this repository for security reasons. You must provide your own.

---

## 🔑 Google OAuth Setup  
1. Go to [Google Cloud Console](https://console.cloud.google.com/) → **APIs & Services** → **Credentials**  
2. Create an **OAuth 2.0 Client ID** for your application  
3. Enable **Google Books API**  
4. Add your Client ID in `google-auth-config.ts` using the template below  

---

## 🛠 `google-auth-config.ts` Template  
```ts
import { InjectionToken, isDevMode } from '@angular/core';

export interface GoogleAuthConfig {
  clientId: string;
  redirectUri: string;
}

export const GOOGLE_AUTH_CONFIG = new InjectionToken<GoogleAuthConfig>('GoogleAuthConfig');

const devConfig: GoogleAuthConfig = {
  clientId: 'your-dev-client-id',
  redirectUri: 'http://localhost:4200/auth-callback',
};

const prodConfig: GoogleAuthConfig = {
  clientId: 'your-prod-client-id',
  redirectUri: 'https://yourdomain.com/auth-callback',
};

export const googleAuthConfig = isDevMode() ? devConfig : prodConfig;
```
---

## 📦 Installation 
```ts
git clone https://github.com/emmapapaioan/BookHaven
cd BookHaven
npm install
ng serve
```

