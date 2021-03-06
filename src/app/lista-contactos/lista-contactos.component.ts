
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Contacto } from '../contacto' ;

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.css'],
})
export class ListaContactosComponent {

  // Con el decorador 'Input' exponemos un atributo para que un
  // componente padre pueda enlazar datos al hijo.
@Input() contactos: Contacto [];

  // Con el decorador 'Output2 exponemos un evento para que un
  // lisra-contactos.component.csscomponente padre pueda suscribirse a él.
  //Además, este evento debe ser un 'EventEmitter' del tipo deseado.
@Output() botonEliminarPulsado = new EventEmitter<Contacto>();

@Output() contactoseleccionado = new EventEmitter<Contacto>();

  // Notificamos datos al componente padre gracias a la función
  // 'emit' de nuestro 'EventEmitter'.
  notificarEliminarContacto(contacto: Contacto): void {
  this.botonEliminarPulsado.emit(contacto);
  }

  notificarSeleccionContacto(contacto: Contacto): void {
  this.contactoseleccionado.emit(contacto);
  }
}
