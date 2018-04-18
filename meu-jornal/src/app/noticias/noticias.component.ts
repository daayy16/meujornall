import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
 noticia: string[] = ["Notícia 1", "Notícia 2", "Notícia 3", "Notícia 4"];
  constructor() { }

  ngOnInit() {
  }

}
