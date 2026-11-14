import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-contact',
  styleUrl: './contact.css',
  templateUrl: './contact.html',
})
export class Contact {
  // Estos campos se conectan al formulario con [(ngModel)]
  nombre = '';
  correo = '';
  mensaje = '';

  enviado = signal(false);

  enviar() {
    // Aquí normalmente se enviarían los datos a un servidor
    this.enviado.set(true);
    this.nombre = '';
    this.correo = '';
    this.mensaje = '';
  }
}
