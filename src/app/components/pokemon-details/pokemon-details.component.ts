import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Pokemon } from 'src/app/model/Pokemon';
import { Requisition } from 'src/app/model/Requisition';
import { PokeapiService } from 'src/app/services/pokeapi.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private pokeService: PokeapiService) { }

  pokemon: any;

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      let id = params['id'];
      this.pokeService.getPokemonById(id).subscribe(elem => {
        this.pokemon = new Pokemon(elem);
        console.log(this.pokemon);
        console.log(elem);
      })
    })
  }

}
