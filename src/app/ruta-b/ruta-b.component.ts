import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ContactosService } from '../contactos.service'; 
import { Contacto } from '../contacto';
import { Router } from '@angular/router'

@Component({
  selector: 'app-ruta-b',
  templateUrl: './ruta-b.component.html',
  styleUrls: ['./ruta-b.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RutaBComponent {

  constructor(private _contactoServicio : ContactosService, private _router: Router){
    console.log('Estoy en el constructor');
  }
  
  crearContacto(contacto: Contacto): void {
    this._contactoServicio
    .agregarContacto(contacto)
    .subscribe (()=> {
      this._router.navigate([`lista-contactos`])
    })

}

}
