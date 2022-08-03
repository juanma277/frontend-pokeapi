import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/core/services/pokemon.service';
import { MatDialog } from '@angular/material/dialog';
import { DetailComponent } from 'src/app/shared/components/detail/detail.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public totalData: number = 0;
  public pokemons: any[] = []; 
  public loader: boolean = true;

  constructor(private pokemonService: PokemonService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.pokemonService.getAllPokemons('15').subscribe({
      next: (res: any) => {
        this.totalData = res.count;
        this.pokemons = res.results;
      },
      complete: () => this.loader = false,
      error: (err: HttpErrorResponse) => console.log(err)
    })
  }

  async getById(poke: string){
    let str = poke.substring(34);
    let id = str.substring(0, str.length -1);
    this.dialog.open(DetailComponent, {
      width: '600px',
      height: '600px',
      data: id,
      autoFocus: false,
    })
  }

}
