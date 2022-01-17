import { Component } from '@angular/core';
import { Hero } from './hero';
import { Heroes } from './mock-heroes';
import { Router } from '@angular/router';

@Component({
  selector: 'heroes-app',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent {
  constructor(private router: Router) {}

  selectedHero?: Hero;
  heroes = Heroes;

  onSelect(heroes: Hero) {
    this.router.navigate(['/heroes', heroes.id]);
  }
}
