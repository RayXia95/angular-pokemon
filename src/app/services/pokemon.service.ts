import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

//This library has helper functions to manipulate
//mediatypes like JSON and XML.
//We are going to specifically use the map() function.
//This function maps a JSON directly to a POJO
//That we have defined.
import 'rxjs/Rx';

//POJO
import { Pokemon } from '../models/pokemon.model';

@Injectable()
export class PokemonService {

  //Injecting the http object
  constructor(private http: Http) { }

  public fetchPokemonInformation(id: number): Observable<Pokemon> {
    //Publishing our Observable<Pokemon
    return this.http
            .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .map((response: Response) => {
              return <Pokemon> response.json();
            })
            //Handling bad Status Codes(400~500).
            .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }
}
