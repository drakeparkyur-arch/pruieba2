import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DecimalPipe } from '@angular/common';
import { ProductService } from '../../services/product.service';

@Component({
  imports: [RouterLink, DecimalPipe],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  // inject() trae el servicio para usarlo en esta página
  private productService = inject(ProductService);

  // Los 3 primeros productos de la carta
  destacados = this.productService.obtenerDestacados(3);
}
