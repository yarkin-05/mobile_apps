import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HomeService {

  constructor(
    public http: HttpClient
  ) {
  }

  listPokemon(){
    let URL = 'https://pokeapi.co/api/v2/pokemon?limit=25';
    return this.http.get(URL);
  }

  infoPoke(name: string){
    let URL =  `https://pokeapi.co/api/v2/pokemon/${name}`;
    return this.http.get(URL);
  }
}