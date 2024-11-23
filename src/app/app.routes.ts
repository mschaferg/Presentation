import { Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/current-work/skills.component';
import { AboutComponent } from './components/about/about.component';
import { Fake404Component } from './components/fake-404/fake-404.component';

export const routes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'about', component: AboutComponent },
  { path: '404', component: Fake404Component},
  { path: '', component: LandingComponent  },
  { path: '**', redirectTo: '' }, // Wildcard route (for 404)
];

