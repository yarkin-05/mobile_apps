import { Component } from '@angular/core';
import { HomeService } from './_services/Home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  pokemonList: any = [];

  constructor(
    public _homeService: HomeService
  ) {}

  ngOnInit(){
    this.getListPokemon();
  }

  getListPokemon(){
    this._homeService.listPokemon().subscribe((resp: any) => {
      console.log('respuesta', resp);
    });
    this._homeService.listPokemon().subscribe((resp: any) => {
      this.pokemonList = resp.results;

      for(let pokemon of this.pokemonList){
        this._homeService.infoPoke(pokemon.name).subscribe((details: any) => {
          pokemon.image = details.sprites.front_default;
          pokemon.weight = details.weight;
        });
      }
    });

    
  }

 
}

