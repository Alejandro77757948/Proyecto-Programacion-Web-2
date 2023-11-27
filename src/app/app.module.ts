import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { FormsModule } from "@angular/forms";
import { DocumentosComponent } from './documentos/documentos.component';
import { BecasComponent } from './becas/becas.component';
import { InformacionComponent } from './informacion/informacion.component';
const routes: Routes = [
  {
    path: 'home',
    component: MainComponent,
  },
  {
    path: 'documentos',
    component: DocumentosComponent,
  },
  {
    path: 'becas',
    component: BecasComponent,
  },
  {
    path: 'informacion',
    component: InformacionComponent
  },
] 
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DocumentosComponent,
    BecasComponent,
    InformacionComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
