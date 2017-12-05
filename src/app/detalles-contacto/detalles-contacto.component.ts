import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Contacto } from '../contacto';

@Component({
  selector: 'app-detalles-contacto',
  templateUrl: './detalles-contacto.component.html',
  styleUrls: ['./detalles-contacto.component.css'],
})
export class DetallesContactoComponent {

  @Input() contacto: Contacto;
  @Output() botonFacebookPulsado = new EventEmitter<string>()
  @Output() botonTwitterPulsado = new EventEmitter<string>()

  constructor() { }
  notificarNavecacionFacebook() {
    this.botonFacebookPulsado.emit(this.construirRutaFacebook())
}

  notificarNavecacionTwitter() {
  this.botonTwitterPulsado.emit(this.construirRutaTwitter())
}
  
  construirRutaFacebook(): string {
  return this.contacto.facebook ? `http://facebook.com/${this.contacto.facebook}`
   :null
}

  construirRutaTwitter(): string {
  return this.contacto.twitter ? `http://twitter.com/${this.contacto.twitter}`
   :null
}


}
