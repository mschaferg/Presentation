import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  projects: {
    name: string,
    description: string,
    link: string,
    imgSrc: string
  }[] = [
    {
      name: "Expense Tracker",
      description: "Like Mint, but worse.",
      link: "https://mschaferg.github.io/angular-expense-tracker",
      imgSrc: "../../../assets/Expense-App.png"
    },
    {
      name: "Point of Sale App",
      description: "I had to make this when I started my job. It's a pos POS. (It's not actually hosted online so this will just take you to a small website called Google).",
      link: "https://google.com",
      imgSrc: "../../../assets/Point-Of-Sale-App.png"
    }
  ];

}
