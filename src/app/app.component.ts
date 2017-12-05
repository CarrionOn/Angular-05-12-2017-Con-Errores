import { Component } from '@angular/core';


// Con el decorador '@Component' otorgamos a la clase
// decorada comportamiento de componente.
@Component({
  // El metadato 'selector' indica el selector CSS encargado
  // de seleccionar el elemento HTML en el cual instanciar
  // el componente.
  selector: 'app-root',
  // En 'templateUrl' indicamos la ruta al template (docuemto HTML)
  // asociado al componente.
  templateUrl: './app.component.html',
  // En 'styleUrls' indicamos la ruta al template (docuemto HTML)
  // que aplican al componente.
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  


  }