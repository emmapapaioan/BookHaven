import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type ThemeMode = 'light-theme' | 'dark-theme';
const THEME_KEY = 'theme-mode';

@Injectable({
  providedIn: 'root'
})
export class ThemeManager {
  private readonly theme$ = new BehaviorSubject<ThemeMode>('light-theme');

  constructor() {
    const stored = localStorage.getItem(THEME_KEY) as ThemeMode | null;
    this.setTheme(stored ?? 'light-theme');
  }

  setTheme(theme: ThemeMode) {
    this.theme$.next(theme);
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(theme);
    localStorage.setItem(THEME_KEY, theme);
  }

  toggleTheme() {
    const currentTheme = this.theme$.getValue();
    const newTheme = currentTheme === 'light-theme' ? 'dark-theme' : 'light-theme';
    this.setTheme(newTheme);
    localStorage.setItem(THEME_KEY, newTheme);
  }

  clearTheme() {
    localStorage.removeItem(THEME_KEY);
    this.setTheme('light-theme');
  }
}
