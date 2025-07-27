import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DarkModeManager } from '../../core/dark-mode-manager';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss']
})
export class Dashboard {

  constructor(private darkModeManager: DarkModeManager) { }

  toggleDarkMode() {
    this.darkModeManager.toggleDarkMode();
  }

}
