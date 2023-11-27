import { Component,OnInit, ViewChild, ElementRef} from '@angular/core';
import {Paginas} from '../Paginas';
import { Ubicacion, Departamentos} from "../Ubicacion";
import { Enlace } from "../EnlacesNavBar";
import { Imagen } from "../Imagen";
import { Alerta } from "../Alerta";
import { Persona, imgUsers } from "../Persona";
@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.css']
})
export class DocumentosComponent implements OnInit {
  ngOnInit(): void {}
  //@ViewChild('txtDepa') txtDepa: ElementRef;
  pagina1:Paginas ={
    principal : 'EduHub',
    documentos : 'Documentos',
    becas : 'Becas',
    informacion : 'Informacion',
    title : 'EDUHUB',
  };
  departamento:Ubicacion ={
    nombre: '',
  };
  lugares:Departamentos = {
    departamentos:['La Paz', 'Cochabamba', 'Santa Cruz', 'Chuquisaca', 'Pando', 'Beni', 'Tarija', 'Oruro', 'Potosi'],
  }
  setDepartamento(nom:string){
    let uwu = false;
    for (let i = 0; i < this.lugares.departamentos.length; i++) {
      if(nom == this.lugares.departamentos[i]){
        uwu = true;
      }
    }
    if(nom != '' && uwu){
      this.alerta1.switchTrue = true;
      this.departamento.nombre = nom;
    }
    else{
      this.alerta1.switchFalse = true;
    }
  }
  enlace1:Enlace ={
    text_color: 'nav-link',
  };
  setColor1(color:string){
    this.enlace1.text_color = color;
    this.enlace2.text_color = 'nav-link'
    this.enlace3.text_color = 'nav-link'
  }
  enlace2:Enlace ={
    text_color: 'nav-link',
  };
  setColor2(color:string){
    this.enlace1.text_color = 'nav-link'
    this.enlace2.text_color = color;
    this.enlace3.text_color = 'nav-link'
  }
  enlace3:Enlace ={
    text_color: 'nav-link',
  };
  setColor3(color:string){
    this.enlace1.text_color = 'nav-link'
    this.enlace2.text_color = 'nav-link'
    this.enlace3.text_color = color;
  }
  saludar(nom:string){
    console.log("hola funciona"+nom);
  }
  imagenes:Imagen ={
    src1:'../assets/umsa.jpeg',
    src2:'../assets/1624469061433.gif',
    src3:'../assets/monbukagakusho.jpg',
  }
  alerta1:Alerta = {
    exito:'Departamento Encontrado con Exito',
    error:'Departamento Encontrado sin Exito',
    switchTrue:false,
    switchFalse:false,
  }
  nuevoUser:Persona={
    ci:'',
    nombre:'',
    paterno:'',
    materno:'',
    fechanaci:'',
    departamento:'',
    imgUser:'',
  }
  crearUsuario(a:string, b:string, c:string, d:string, e:string, f:string, g:string){
    this.nuevoUser.ci = a;
    this.nuevoUser.nombre = b
    this.nuevoUser.paterno = c
    this.nuevoUser.materno = d
    this.nuevoUser.fechanaci = e
    this.nuevoUser.departamento = f
    switch (g) {
      case '1':
          this.nuevoUser.imgUser = this.imagenesUsuarios.a
        break;
      case '2':
          this.nuevoUser.imgUser = this.imagenesUsuarios.b
        break;
      case '3':
          this.nuevoUser.imgUser = this.imagenesUsuarios.c
        break;
      case '4':
          this.nuevoUser.imgUser = this.imagenesUsuarios.d
        break;
      case '5':
          this.nuevoUser.imgUser = this.imagenesUsuarios.e
        break;
      case '6':
          this.nuevoUser.imgUser = this.imagenesUsuarios.f
        break;
      case '7':
          this.nuevoUser.imgUser = this.imagenesUsuarios.g
        break;
      case '8':
          this.nuevoUser.imgUser = this.imagenesUsuarios.h
        break;
      case '9':
          this.nuevoUser.imgUser = this.imagenesUsuarios.i
        break;
      
    }
    console.log(this.nuevoUser)
    this.personitas.push(this.nuevoUser);
  }
  personitas: Persona[] = [
    { ci:'10927406lp', nombre:'Luis', paterno:'Cerda', materno:'Rojas', fechanaci:'22/01/2004', departamento:'La Paz', imgUser:'../../assets/usuarios/1.jpg'},
    { ci:'10925863lp', nombre:'Anahi', paterno:'Izurieta', materno:'Morales', fechanaci:'15/09/2003', departamento:'La Paz', imgUser:'../../assets/usuarios/2.jpg'}, 
    { ci:'17852146lp', nombre:'Ronald', paterno:'Mendoza', materno:'Caspa', fechanaci:'18/07/2004', departamento:'La Paz', imgUser:'../../assets/usuarios/3.jpg'},
    { ci:'18485926cb', nombre:'Dilan', paterno:'Cortez', materno:'Mansilla', fechanaci:'02/01/2004', departamento:'Cochabamba', imgUser:'../../assets/usuarios/4.jpg'}, 
    { ci:'15263333sc', nombre:'Waldo', paterno:'Caballero', materno:'Rojas', fechanaci:'23/12/2004', departamento:'Santa Cruz', imgUser:'../../assets/usuarios/5.jpg'}, 
    { ci:'48252506lp', nombre:'Evians', paterno:'Zabala', materno:'Lazo', fechanaci:'12/11/2003', departamento:'Tarija', imgUser:'../../assets/usuarios/6.jpg'}, 
  ];
  imagenesUsuarios:imgUsers = {
    a:'../../assets/usuarios/1.jpg',
    b:'../../assets/usuarios/2.jpg',
    c:'../../assets/usuarios/3.jpg',
    d:'../../assets/usuarios/4.jpg',
    e:'../../assets/usuarios/5.jpg',
    f:'../../assets/usuarios/6.jpg',
    g:'../../assets/usuarios/7.jpg',
    h:'../../assets/usuarios/8.jpg',
    i:'../../assets/usuarios/9.jpg',
  }
}
