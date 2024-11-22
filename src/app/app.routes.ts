import { Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: 'landing', pathMatch: 'full' }, // Default route
  { path: '**', redirectTo: 'landing' }, // Wildcard route (for 404)
];

