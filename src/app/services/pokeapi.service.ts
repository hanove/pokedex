import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Pokemon } from '../model/Pokemon';
import { Observable } from 'rxjs';
import { Requisition } from '../model/Requisition';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  constructor(
    private http: HttpClient
  ) { }

  private readonly apiUrl = 'https://pokeapi.co/api/v2'

  getPokemonById(id: number | String): Observable<any> {
    return this.http.get(`${this.apiUrl}/pokemon/${id}`);
  }

  getPokemons(): Observable<any> {
    return this.http.get(`${this.apiUrl}/pokemon`);
  }

  getNextPage(url: string): Observable<any>{
    return this.http.get(url);
  }

  

  getPokemonsByRequisition(req: Requisition): Array<Pokemon>{
    var pokemons = new Array<Pokemon>;
    req.results.forEach((elem) => {
      this.getPokemonById(elem.name).subscribe((data) => {
        let pokemon = new Pokemon(data);
        pokemon.name = pokemon.name.toUpperCase();
        pokemons.push(pokemon);
      })
    })
    return pokemons.sort((a: Pokemon, b: Pokemon) => a.id - b.id);
  }
}
