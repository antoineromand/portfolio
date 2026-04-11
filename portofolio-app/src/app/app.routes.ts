import {Routes} from '@angular/router';
import {HomePage} from './pages/home/home';

export const routes: Routes = [
  {component: HomePage, path: '', data: {actualPosition: 0, maxPosition: 3}},
  {component: HomePage, path: 'projects', data: {actualPosition: 1, maxPosition: 3}},
  {component: HomePage, path: 'about', data: {actualPosition: 2, maxPosition: 3}},
  {component: HomePage, path: 'contact', data: {actualPosition: 3, maxPosition: 3}},
];

