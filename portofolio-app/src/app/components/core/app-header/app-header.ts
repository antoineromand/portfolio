import {Component} from '@angular/core';
import {Router, RouterModule} from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './app-header.html',
  styleUrl: './app-header.scss',
})
export class AppHeader {
  constructor(private router: Router) {
  }
  isMenuOpen = false;

  closeMenu(): void {
    this.isMenuOpen = false;
  }
}
