import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
  noticia: string[] = ["Notícia 1", "Notícia 2", "Notícia 3", "Notícia 4"];
  mostrarNoticia: boolean = true;

  titulo: string = 'Curso Angular';
  texto: string = 'Ultizando String Interpolation';

  caminho_imagem:string = '../../assets/download.jpg';
  

  constructor() { }

  ngOnInit() {
  }

  public esconderNoticia() {
    this.mostrarNoticia = false;
  }
   
  public voltarRow(){
    this.mostrarNoticia = true;
  }

}
