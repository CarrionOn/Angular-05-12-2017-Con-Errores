import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Contacto } from '../contacto'

@Component({
  selector: 'app-formulario-contacto',
  templateUrl: './formulario-contacto.component.html',
  styleUrls: ['./formulario-contacto.component.css']
})
export class FormularioContactoComponent {

  formulario : FormGroup;

  @Output () botonGuardarPulsado = new EventEmitter<Contacto>()

  constructor(private _formBuilder: FormBuilder) { 

    this.crearFormulario();

  }

  crearFormulario(): void {
    this.formulario = this._formBuilder.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required]
    });
  }

  notificarGuardadoContacto(): void {
    const contacto: Contacto = this.formulario.value as Contacto;
    this.botonGuardarPulsado.emit(contacto);
  }

  }

