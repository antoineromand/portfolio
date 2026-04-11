import {Routes} from '@angular/router';
import {HomePage} from './pages/home/homePage';
import {ProjectsPage} from './pages/projects/projectsPage';

export const routes: Routes = [
  {component: HomePage, path: ''},
  {component: ProjectsPage, path: 'projects'},
  {component: HomePage, path: 'about'},
  {component: HomePage, path: 'contact'},
];

