import { Routes } from '@angular/router';
import { PaginaInicialComponent } from './pages/pagina-inicial/pagina-inicial.component';
import { CardsComponent } from './pages/cards/cards.component';

export const appRoutes: Routes = [
  { path: 'pagina-inicial', component: PaginaInicialComponent },
  { path: 'cards', component: CardsComponent },
  { path: '', redirectTo: '/pagina-inicial', pathMatch: 'full' },
  { path: '**', redirectTo: '/pagina-inicial' }
];
