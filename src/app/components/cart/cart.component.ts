import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { ProductsStore } from '../apiread-ngrx/apiread-ngrx.store';
import { CurrencyPipe, DecimalPipe } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from '../../interfaces/interfaces';

@Component({
  selector: 'app-cart',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DecimalPipe, CurrencyPipe, MatTableModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  readonly store = inject(ProductsStore);
  isVisible = false; // Controla la visibilidad del contenido del carrito

  // Mat-Table DataSource
  dataSource = new MatTableDataSource<Product>([]);

  // Definir columnas a mostrar en la tabla
  displayedColumns: string[] = ['Qty', 'title', 'price', 'Borrar'];
  total: number | undefined;


  totalQuantity = this.store.getTotalQuantity();

  ngOnInit(): void {


  }

  removeFromCart(product: Product) {
    console.log('Removing product from cart:', product); // Log entire product
    console.log('Product ID:', product.id); // Check ID specifically

    this.store.removeFromCart(product);
  }

  toggleVisibility() {
    this.isVisible = !this.isVisible; // Cambia el estado de visibilidad
  }

  closeCart() {
    this.isVisible = false; // Cierra el carrito
  }
}
