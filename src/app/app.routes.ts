import {Routes} from '@angular/router';

export const routes: Routes = [
  {path: 'a', loadComponent: () => import('../app/a/a.component').then(c => c.AComponent)},
  {path: '**', redirectTo: ''}
];
