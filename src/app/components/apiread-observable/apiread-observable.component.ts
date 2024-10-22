import {
  Component,
  inject,
  signal,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ApireadService } from '../../services/apiread.service';
import { Product } from '../../interfaces/interfaces';
import { CurrencyPipe, JsonPipe } from '@angular/common';
import { firstValueFrom } from 'rxjs';
import { ProductsStore } from '../apiread-ngrx/apiread-ngrx.store';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-apiread-observable',
  standalone: true,
  imports: [
    JsonPipe,
    MatCardModule,
    MatButtonModule,
    CurrencyPipe,
    MatDividerModule,
    RouterLink
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './apiread-observable.component.html',
  styleUrl: './apiread-observable.component.scss',
})
export class ApireadObservableComponent {
  producto$!: Product;
  readonly services = inject(ApireadService);

  // Inyecta el store
  readonly store = inject(ProductsStore);

  ngOnInit(): void {
    // Llama al método `getAll` del store para obtener los productos
    this.store.getAll();


    /*this.services.getAll().subscribe((products) => {
      console.log('Fetched products:', products);
      // Check if all products have a valid id
      products.forEach(product => {
        console.log('Product ID:', product.id);
      });
    });*/

    //console.log(this.store.cart())

    //this.store.getById(10)
    //console.log(this.store.product())



    /*this.services.getById(3).subscribe({
      next: (data) => {
        console.log('Product data:', data);
        this.product = data;
      },
      error: (err) => {
        console.error('Error fetching product:', err);
      },
    });*/

    //console.log('El producto es: ', this.product);
  }

  addToCart(product: Product): void {
    this.store.addToCart(product); // Llamar al método del store
  }
}
