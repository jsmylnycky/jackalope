import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { Hero } from '../../interfaces/hero';
import { HeroDetailComponent } from '../hero-detail/hero-detail';
import { GuildService } from '../../services/guild/guild';

@Component({
  selector: 'my-heroes',
  moduleId: 'components/heroes/heroes',
  template: require('./heroes.html'),
  styles: [require('./heroes.css')],
  directives: [HeroDetailComponent]
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private _router: Router,
    private _GuildService: GuildService) { }

  getHeroes() {
    this._GuildService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero) { this.selectedHero = hero; }

  gotoDetail() {
    this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
  }
}