import { Component, OnInit } from '@angular/core';
import { Filme } from '../filme';

@Component({
  selector: 'app-lista-filmes',
  templateUrl: './lista-filmes.component.html',
  styleUrls: ['./lista-filmes.component.css']
})
export class ListaFilmesComponent implements OnInit {

  listaFilmes: Filme[] = [{
    "titulo": "Batman: The Killing Joke",
    "ano": "2016",
    "id": "tt4853102",
    "tipo": "movie",
    "poster": "https://ia.media-imdb.com/images/M/MV5BMTdjZTliODYtNWExMi00NjQ1LWIzN2MtN2Q5NTg5NTk3NzliL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
  },
  {
    "titulo": "Batman: The Dark Knight Returns, Part 2",
    "ano": "2013",
    "id": "tt2166834",
    "tipo": "movie",
    "poster": "https://ia.media-imdb.com/images/M/MV5BYTEzMmE0ZDYtYWNmYi00ZWM4LWJjOTUtYTE0ZmQyYWM3ZjA0XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
  },
  {
    "titulo": "Batman: Mask of the Phantasm",
    "ano": "1993",
    "id": "tt0106364",
    "tipo": "movie",
    "poster": "https://ia.media-imdb.com/images/M/MV5BODE0YTBiMjQtNWQyZC00YTNjLWJmYjAtMWUwNzI4NGVlZTAzL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
  }
  ];

  constructor() { }

  ngOnInit() {
  }

}
