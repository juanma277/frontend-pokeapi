import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PokemonService } from 'src/app/core/services/pokemon.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  public loader: boolean = true;
  public pokemon: any;

  constructor(public dialogRef: MatDialogRef<DetailComponent>, 
              private pokemonService: PokemonService,
              @Inject(MAT_DIALOG_DATA) public idPokemon: string) { }

  ngOnInit(): void {
    this.pokemonService.getByIdPokemon(this.idPokemon).subscribe({
      next: (res) => this.pokemon = res,
      complete: () => this.loader = false,
      error: (err: HttpErrorResponse) => console.log(err)
    })
  }

  close(){
    this.dialogRef.close();
  }

}
