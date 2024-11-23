import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fake-404',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fake-404.component.html',
  styleUrl: './fake-404.component.css'
})
export class Fake404Component {
  is404Visible = true;

  constructor( private router: Router) {
    setTimeout( () => {
      this.is404Visible = false;
      this.navigateToProjects();
    }, 2000)
  }

  navigateToProjects() {
    setTimeout( () => {
      this.router.navigate(['/projects'])
    }, 3000)
  }

}
