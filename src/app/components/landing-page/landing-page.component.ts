import { ChangeDetectionStrategy, Component, destroyPlatform, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { fromEvent, Observable, Subject, takeUntil } from 'rxjs';
import { Pokemon } from 'src/app/model/Pokemon';
import { Requisition } from 'src/app/model/Requisition';
import { PokeapiService } from 'src/app/services/pokeapi.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(
    private pokeService: PokeapiService
  ) {

  }

  public pokemon: any;
  public pokemons: any = null;
  private requisition: any = null;

  ngOnInit(): void {
    this.pokemons = new Array<Pokemon>;
    this.pokeService.getPokemons().subscribe(elem => {
      let req = new Requisition(elem as Requisition);
      this.requisition = req;
      req.results.forEach(res => {
        this.pokeService.getPokemonById(res.name).subscribe(val => {
          let poke = new Pokemon(val);
          this.pokemons.push(poke);
        })
      })
      this.pokemons.sort((x: Pokemon, y: Pokemon) => {
        if (x.id - y.id < 0) {
          return -1;
        } else {
          if (x.id - y.id > 0) {
            return 1;
          } else {
            return 0;
          }
        }
      })
    });
  }

  getPokemons() {
    this.pokeService.getNextPage((this.requisition as Requisition).next).subscribe(elem => {
      let req = new Requisition(elem as Requisition);
      this.requisition = req;
      req.results.forEach(res => {
        this.pokeService.getPokemonById(res.name).subscribe(val => {
          let poke = new Pokemon(val);
          this.pokemons.push(poke);
        })
      })
      this.pokemons.sort((x: Pokemon, y: Pokemon) => {
        if (x.id - y.id < 0) {
          return -1;
        } else {
          if (x.id - y.id > 0) {
            return 1;
          } else {
            return 0;
          }
        }
      })
    })
  }

  onScrollDown() {
    this.getPokemons();
  }

}
