import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/model/Pokemon';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.scss']
})
export class PokeCardComponent implements OnInit {

  router: Router;
  constructor(router: Router, private route: ActivatedRoute) {
    this.router = router;
  }

  @Input() pokemon: any;

  ngOnInit(): void {

  }

  onClick(card: Pokemon) {
    this.router.navigate(['/poke-details/'], { queryParams: { id: this.pokemon.id } })
  }

}
