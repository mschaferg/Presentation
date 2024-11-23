import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  currentRoute: string = '';

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.currentRoute = this.router.url; // Update the active route
    });
  }

  navigationRoutes = [
    {name: "Home", value: "landing"},
    {name: "About", value: "about"},
    {name: "Current Work", value: "skills"},
    {name: "Projects", value: "projects"}
  ]
  
  handleRouting( route: string ) {
    this.router.navigate(['/'+route])
  }
}
