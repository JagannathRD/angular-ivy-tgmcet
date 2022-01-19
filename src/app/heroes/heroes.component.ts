import { Component } from '@angular/core';
import { Hero } from './hero';
import { Heroes } from './mock-heroes';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'heroes-app',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  selectedHero?: Hero;
  heroes = Heroes;
  selectedId;

  onSelect(heroes: Hero) {
    //this.router.navigate(['/heroes', heroes.id]);
    this.router.navigate([heroes.id],{relativeTo:this.route})
  }
  ngOnInit() {
    this.route.paramMap.subscribe((p) => {
      let selected = parseInt(p.get('id'))
      this.selectedId = selected;
    });
  }
}
