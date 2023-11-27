import { Component, OnInit } from '@angular/core';
import {Paginas} from './Paginas';
import { RouterModule, Routes } from "@angular/router";
import { DocumentosComponent } from "./documentos/documentos.component";
import { BecasComponent } from "./becas/becas.component";
import { MainComponent } from "./main/main.component";
import { InformacionComponent } from "./informacion/informacion.component";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(){  }
  ngOnInit(): void {}
  pagina1:Paginas ={
    principal : 'EduHub',
    documentos : 'Documentos',
    becas : 'Becas',
    informacion : 'Informacion',
    title : 'EDUHUB',
  };
}
