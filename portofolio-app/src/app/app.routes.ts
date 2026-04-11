import {Routes} from '@angular/router';
import {HomePage} from './pages/home/home';

export const routes: Routes = [
  {component: HomePage, path: ''},
  {component: HomePage, path: 'projects'},
  {component: HomePage, path: 'about'},
  {component: HomePage, path: 'contact'},
];

