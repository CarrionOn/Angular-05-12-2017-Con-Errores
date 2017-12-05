import { ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ListaContactosComponent } from './lista-contactos/lista-contactos.component';
import { ContactosService } from './contactos.service'
import { FormularioContactoComponent } from './formulario-contacto/formulario-contacto.component'
import { AppRoutingModule } from './app-routing/app-routing.module';
import { RutaAComponent } from './ruta-a/ruta-a.component';
import { RutaBComponent } from './ruta-b/ruta-b.component';
import { DetallesContactoComponent } from './detalles-contacto/detalles-contacto.component'

// Usamos el decorador 'NgModule' para que la clase
// decorada se comporte como un módulo.
@NgModule({
  //En el metadato 'declarations' indicamos todos aquellos
  // componentes, pipes y directivas de mi aplicación.
  declarations: [
    AppComponent,
    ListaContactosComponent,
    FormularioContactoComponent,
    RutaAComponent,
    RutaBComponent,
    DetallesContactoComponent,

  ],
  // En el metadato 'imports' indicamos todos aquellos
  // módulos de los cuáles mi aplicación depende.
  // BrowserModule es, porque mi app es para la web.
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  // En el metadato'providers' indicamos todos aquellos
  // proveedeores de clase o valores que puden ser inyectados.
  providers: [
    ContactosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
