import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroesService } from './heroes.service';
import { Observable } from 'rxjs';
import { Tesorero } from './tesorero';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  providers: [HeroesService],
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {


  heroes: Hero;


  constructor(private heroesService: HeroesService) {}

  ngOnInit() {

  }

  getHeroes(): void {
    console.log(" largo :::" );
    console.log(" largo :::" );
    console.log(" largo :::" );
    this.heroesService.fetchData()
      .subscribe(heroes => {
        (this.heroes = heroes);
        console.log(" largo :::" + heroes.msg);
      });
  }


}
