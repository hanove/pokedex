import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/model/Pokemon';

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.scss']
})
export class PokeCardComponent implements OnInit {

  constructor() { }

  @Input() pokemon: any;

  ngOnInit(): void {
  }

  onClick(card:Pokemon){
    console.log(card);
  }

}
