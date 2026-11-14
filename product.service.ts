import { Injectable } from '@angular/core';

// Forma de cada producto de la carta
export interface Producto {
  id: number;
  nombre: string;
  categoria: 'Calientes' | 'Frías' | 'Postres';
  descripcion: string;
  precio: number;
}

// Un servicio guarda datos o lógica que varias páginas comparten.
// providedIn: 'root' significa que hay una sola copia para toda la app.
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productos: Producto[] = [
    { id: 1, nombre: 'Espresso Andino', categoria: 'Calientes', descripcion: 'Café de altura, intenso y aromático.', precio: 6.5 },
    { id: 2, nombre: 'Cappuccino', categoria: 'Calientes', descripcion: 'Espresso con leche vaporizada y espuma.', precio: 9 },
    { id: 3, nombre: 'Latte de vainilla', categoria: 'Calientes', descripcion: 'Suave, cremoso y ligeramente dulce.', precio: 10 },
    { id: 4, nombre: 'Café helado', categoria: 'Frías', descripcion: 'Espresso con hielo y un toque de caramelo.', precio: 11 },
    { id: 5, nombre: 'Frappé de moka', categoria: 'Frías', descripcion: 'Café, chocolate y hielo licuado.', precio: 13 },
    { id: 6, nombre: 'Brownie', categoria: 'Postres', descripcion: 'Chocolate intenso con nueces.', precio: 8 },
    { id: 7, nombre: 'Tarta de lúcuma', categoria: 'Postres', descripcion: 'La fruta peruana en una porción cremosa.', precio: 12 },
    { id: 8, nombre: 'Croissant', categoria: 'Postres', descripcion: 'Hojaldrado, recién horneado.', precio: 7.5 },
  ];

  // Devuelve toda la carta
  obtenerTodos(): Producto[] {
    return this.productos;
  }

  // Devuelve solo los primeros "cantidad" productos (para el Inicio)
  obtenerDestacados(cantidad: number): Producto[] {
    return this.productos.slice(0, cantidad);
  }
}
