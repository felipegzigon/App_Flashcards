import { Routes } from '@angular/router';
import { PaginaInicial } from './pages/pagina-inicial/pagina-inicial';
import { Cards } from './pages/cards/cards';

export const appRoutes: Routes = [
  { path: 'pagina-inicial', component: PaginaInicial },
  { path: 'cards', component: Cards },
  { path: '', redirectTo: '/pagina-inicial', pathMatch: 'full' },
  { path: '**', redirectTo: '/pagina-inicial' }
];
