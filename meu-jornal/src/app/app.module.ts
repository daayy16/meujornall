import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { RodapeComponent } from './rodape/rodape.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { AlertaComponent } from './alerta/alerta.component';
import { PrimeiroExemploComponent } from './primeiro-exemplo/primeiro-exemplo.component';
import { SegundoExemploComponent } from './segundo-exemplo/segundo-exemplo.component';
import { FormsModule } from '@angular/forms';
import { TerceiroExemploComponent } from './terceiro-exemplo/terceiro-exemplo.component';


@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    RodapeComponent,
    NoticiasComponent,
    AlertaComponent,
    PrimeiroExemploComponent,
    SegundoExemploComponent,
    TerceiroExemploComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
