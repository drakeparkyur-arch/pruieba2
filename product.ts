import { Component, computed, inject, signal } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { ProductService } from '../../services/product.service';

@Component({
  imports: [DecimalPipe],
  selector: 'app-product',
  styleUrl: './product.css',
  templateUrl: './product.html',
})
export class Product {
  private productService = inject(ProductService);

  productos = this.productService.obtenerTodos();
  categorias = ['Todos', 'Calientes', 'Frías', 'Postres'];

  // signal: un valor que, al cambiar, actualiza la pantalla automáticamente
  categoriaActual = signal('Todos');

  // computed: se recalcula solo cuando cambia categoriaActual
  productosFiltrados = computed(() => {
    const categoria = this.categoriaActual();
    return categoria === 'Todos'
      ? this.productos
      : this.productos.filter(p => p.categoria === categoria);
  });

  elegir(categoria: string) {
    this.categoriaActual.set(categoria);
  }
}
