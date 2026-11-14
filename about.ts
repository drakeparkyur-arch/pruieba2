import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-about',
  styleUrl: './about.css',
  templateUrl: './about.html',
})
export class About {
  // Lista de valores del café (se muestra con @for)
  valores = [
    { titulo: 'Origen peruano', texto: 'Trabajamos con pequeños productores de Cusco y Junín.' },
    { titulo: 'Tostado semanal', texto: 'Tostamos en pequeñas tandas para que el café llegue fresco.' },
    { titulo: 'Atención cercana', texto: 'Cada cliente es recibido como en casa.' },
  ];
}
