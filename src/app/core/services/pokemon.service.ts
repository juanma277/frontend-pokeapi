import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  public apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAllPokemons(limit: number) {
    return this.http.get(`${this.apiUrl}pokemon/getall?limit=${limit}`);
  }

  getByIdPokemon(id: string) {
    return this.http.get(`${this.apiUrl}pokemon/getByid/${id}`);
  }
}
