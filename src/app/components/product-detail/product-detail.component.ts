import { Component, inject, input, signal } from '@angular/core';
import { Product } from '../../interfaces/interfaces';
import { ProductsStore } from '../apiread-ngrx/apiread-ngrx.store';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {

  product!:Product | null;
  readonly store = inject(ProductsStore)

  id = input<number>()

  ngOnInit(): void {
    const numericId = Number(this.id()); // Convertir el id a un número
    this.store.getById(numericId).then(() => {
      this.product = this.store.getCurrentProduct()(); // Get the current product from the store
      //console.log(this.product); // Log the product to verify
    }).catch(error => {
      console.error('Error fetching product:', error); // Handle errors if needed
    });


    
  }

  addToCart(product: Product): void {
    this.store.addToCart(product); // Llamar al método del store
  }

}
