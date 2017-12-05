import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Contacto } from '../contacto';
import { ContactosService } from '../contactos.service'; 
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-ruta-a',
  templateUrl: './ruta-a.component.html',
  styleUrls: ['./ruta-a.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RutaAComponent implements OnInit {

  contactos$: Observable<Contacto[]>;

  contactoseleccionado: Contacto

  constructor(private _contactoServicio : ContactosService){
    console.log('Estoy en el constructor');
  }


// El hook 'OnInit' se ejecuta cuando el componente tiene asociado
  // su template correspondiente, por tanto es el momento ideal para
  // enlazar daros entre ellos.
  ngOnInit(): void {
    console.log('Estoy en el hook OnInit!');
    // 1º opcion Suscripocion manual al observable
    //this._contactoServicio.obtenerContactos().subscribe((contactos: Contacto[]) =>{
    //  this.nombres = contactos 
   // })


   //Opción 2 Suscripción automaticaal observable con la ayuda del pipe api
    this.contactos$ = this._contactoServicio.obtenerContactos();
  }

  eliminarContacto(nombre: Contacto): void {
    this._contactoServicio.eliminarContacto(nombre);
    //this.nombres = this._contactoServicio.obtenerContactos();
  }

  verDetalles(nombre: Contacto): void {
    this.contactoseleccionado = nombre; 
  }

  verPerfil(ruta: string): void {
    window.open(ruta, '_blank')
  }

}
