import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { NgIf } from '@angular/common';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit, OnDestroy {
  protected title = 'Flashcards';
  protected showFooter = true;
  private routerSub?: Subscription;

  constructor(private router: Router) {}

  ngOnInit() {
    this.routerSub = this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd ))
      .subscribe(event => {
        this.showFooter = !event.urlAfterRedirects.startsWith('/card');
  });
    this.showFooter = !this.router.url.startsWith('/card');
  }

  ngOnDestroy() {
    this.routerSub?.unsubscribe();
  }
}