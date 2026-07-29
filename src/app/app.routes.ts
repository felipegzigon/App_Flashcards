import { Routes } from '@angular/router';
import { Decks } from './pages/decks/decks';
import { Card } from './pages/card/card';
import { EditCard } from './pages/edit-card/edit-card';
import { Search } from './pages/search/search';
import { AddCard } from './pages/add-card/add-card';
import { Account } from './pages/account/account';

export const appRoutes: Routes = [
  { path: 'account', component: Account },
  { path: 'card', component: Card },
  { path: 'card/:id', component: EditCard },
  { path: 'card/add', component: AddCard },
  { path: 'search', component: Search },
  { path: 'decks', component: Decks },
  { path: '', redirectTo: '/decks', pathMatch: 'full' },
  { path: '**', redirectTo: '/decks' }
];
