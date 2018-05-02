import { Component, OnInit } from '@angular/core';

//Service
import { PokemonService } from '../../services/pokemon.service';

//Model
import { Pokemon } from '../../models/pokemon.model';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {
  title = 'HTTP';
  documentation = 'https://angular.io/guide/http';

  constructor(private pokemonService: PokemonService) { }

  public pokemon: Pokemon = new Pokemon(150, '');

  ngOnInit() {
    this.getPokemonInformation();
  }

  getPokemonInformation(): void {
    this.pokemonService.fetchPokemonInformation(this.pokemon.id)
    .subscribe(
      //map()
      mappedPokemon => this.pokemon = mappedPokemon,
      //catch()
      error => console.log(`Error: ${error}`)
    )
  }
}
