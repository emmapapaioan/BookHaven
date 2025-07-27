import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeManager {
  private readonly storageKey: string = 'dark';
  private isPlatformBrowser: boolean = false; // Client side
  
  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isPlatformBrowser = isPlatformBrowser(platformId);
  }

  toggleDarkMode(): void {
    if (!this.isPlatformBrowser) return;

    const root = document.documentElement;
    const isDark = root.classList.toggle('dark');
    localStorage.setItem(this.storageKey, String(isDark));
  }

  isDarkMode(): boolean {
    return document.documentElement.classList.contains('dark');
  }

  public loadInitialTheme(): void {
    if (!this.isPlatformBrowser) return;

    const stored = localStorage.getItem(this.storageKey);
    const shouldBeDark = stored === 'true';
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}
