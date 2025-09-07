import { Component } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatSidenavModule, MatButtonModule, RouterModule],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.scss']
})
export class Sidebar {
  constructor() { }

}
