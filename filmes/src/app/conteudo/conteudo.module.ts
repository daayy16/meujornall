import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaFilmesComponent } from './lista-filmes/lista-filmes.component';
import { FilmeCardComponent } from './filme-card/filme-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListaFilmesComponent, FilmeCardComponent],
  exports: [
    ListaFilmesComponent
  ]
})
export class ConteudoModule { }
