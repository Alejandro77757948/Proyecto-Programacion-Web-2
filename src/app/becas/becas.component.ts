
import { Component,OnInit, ViewChild, ElementRef} from '@angular/core';
import {Paginas} from '../Paginas';
import { Ubicacion, Departamentos} from "../Ubicacion";
import { Enlace } from "../EnlacesNavBar";
import { Imagen } from "../Imagen";
import { Alerta } from "../Alerta";
import { Persona, imgUsers } from "../Persona";
import { Becas } from "../Beca";
@Component({
  selector: 'app-becas',
  templateUrl: './becas.component.html',
  styleUrls: ['./becas.component.css']
})
export class BecasComponent implements OnInit{
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
  bequitas:Becas[] = [
    {
      srcBeca:'https://assets-global.website-files.com/6179e72643b5332593b2ba1d/650b08a7ff965f7ddb72bc48_Voces-credicorp-1024x544-p-800.png',
      descripcion:'VOCES es un espacio de búsqueda, discusión y amplificación de soluciones colectivas para los desafíos de la región. Recogeremos las ideas de las mentes brillantes de Perú, Colombia, Chile, Bolivia y Panamá que, a través de la digitalización, permitan que más personas tengan acceso a servicios de salud, alimentación y educación. No se considerarán dentro de la evaluación a proyectos ya implementados o avanzados.',
      nombre:'VoCES',
    },
    {
      srcBeca:'https://assets-global.website-files.com/6179e72643b5332593b2ba1d/65027a0cfafc235eb10d0ae1_AcademicChallengeLogo_white-uai-913x608-1-p-800.jpg',
      descripcion:'Invitamos a estudiantes de todo el mundo a pensar creativamente sobre un problema que enfrentan los profesionales inmobiliarios de empresas reconocidas como USAA, Google, Standard Chartered, IBM, HSBC, AstraZeneca, Whirlpool y muchas otras.',
      nombre:'Academic Global Challenge ',
    },
    {
      srcBeca:'https://assets-global.website-files.com/6179e72643b5332593b2ba1d/64e002dce826f7bc35cc296f_Beca%20Hubert%20H..jpg',
      descripcion:'Las becas Hubert H. Humphrey para bolivianos llevan a Estados Unidos a profesionales talentosos de países de África, Asia, América Latina, el Caribe, el Medio Oriente y Euro Asia, que se encuentren a la mitad de su carrera profesional, para un año académico de estudio y experiencias profesionales relacionadas son su área de trabajo. El Programa proporciona una base para establecer colaboraciones y relaciones productivas duraderas entre los ciudadanos de los Estados Unidos y sus contrapartes profesionales de otros países, fomentando un intercambio de conocimiento y entendimiento mutuo a través del mundo. Las Becas Humphrey se limitan a un año académico (de agosto a junio), precedidas, si fuese necesario, por un curso intensivo de inglés.',
      nombre:'Becas Hubert H. Humphrey',
    },
    {
      srcBeca:'https://assets-global.website-files.com/6179e72643b5332593b2ba1d/626c09ff3ede32108b2bf698_59e5f0baf7c3932023e8214b645ca252.jpeg',
      descripcion:'Las becas son otorgadas a mujeres de países en vías de desarrollo y de medianos ingresos, quienes después de obtener sus títulos universitarios regresarán o continuarán viviendo en países en vías de desarrollo para trabajar en pro de la mejora de la calidad de vida de las mujeres y/o niñas/os. Pueden postular hasta el 30 de septiembre del 2023, personas que se identifiquen como mujeres y tengan como mínimo 25 años de edad al momento del cierre de la convocatoria. No tener vínculo familiar alguno con ningún empleado del Banco Mundial, el Fondo Monetario Internacional o el Banco Interamericano de Desarrollo.',
      nombre:'Margaret McNamara (Diversos países)',
    },
    {
      srcBeca:'https://assets-global.website-files.com/6179e72643b5332593b2ba1d/626c0a033ede320d572bf6aa_Captura-2.png',
      descripcion:'La Iniciativa SoftBank Miami es un compromiso de financiación de $ 100 millones dedicado a apoyar y construir una comunidad de empresas emergentes de tecnología.Miami está a punto de convertirse en un importante centro tecnológico. El ecosistema de empresas emergentes, está acumulando talento y recursos rápidamente.Si tienes una empresa de tecnología en etapa de crecimiento o puesta en marcha, no esperes y aplica a esta iniciativa.',
      nombre:'SoftBank Operator School (Cualquier país)',
    },
    {
      srcBeca:'https://assets-global.website-files.com/6179e72643b5332593b2ba1d/626c09fc9e007445cb28478e_Untitled-design-3-759x500.png',
      descripcion:'El programa de becas posdoctorales Banting proporciona financiación a los mejores postulantes postdoctorales, a nivel internacional.El objetivo del programa de becas posdoctorales Banting es atraer y retener talento postdoctoral de primer nivel, desarrollar su potencial de liderazgo y posicionarlos para el éxito como líderes de investigación del mañana.70 becas se otorgan anualmente, con una duración de 2 años y 140 premios activos. Postulaciones hasta el 22 de septiembre del 2023.',
      nombre:'Banting Postdoctoral Fellowships program (Canadá)',
    },
  ];
}
