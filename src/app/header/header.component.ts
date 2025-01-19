import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  title = 'Realm Investment House';
  constructor(private router: Router) {}

  goToRoute(route: string) {
    this.router.navigate([route]);
  }
}
