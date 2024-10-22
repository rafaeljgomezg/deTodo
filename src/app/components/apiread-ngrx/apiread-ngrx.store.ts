import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { Product } from '../../interfaces/interfaces';
import { firstValueFrom } from 'rxjs';
import { computed, inject } from '@angular/core';
import { ApireadService } from '../../services/apiread.service';

interface CartItem {
  product: Product;
  quantity: number;
}

type ProductsState = {
  products: Product[];
  product: Product | null;
  cart: CartItem[]; // Usar la nueva interfaz para el carrito
  total: number;
};

const initialState: ProductsState = {
  products: [],
  product: null,
  cart: [], // Iniciar el carrito vacío
  total: 0, // Iniciar el total en 0
};

export const ProductsStore = signalStore(
  { providedIn: 'root' },
  withState<ProductsState>(initialState),
  withMethods((store) => {
    const service = inject(ApireadService); // Inyectamos el servicio

    return {
      // Método para obtener todos los productos
      getAll: async () => {
        const products = await firstValueFrom(service.getAll());
        patchState(store, { products }); // Actualiza el estado
      },

      getById: async (id: number) => {
        const product = await firstValueFrom(service.getById(id));
        patchState(store, { product });
      },

      getCurrentProduct: () => {
        return store.product; // Devuelve el producto actual en el estado
      },

      addToCart: (product: Product) => {
        const currentCart = store.cart();

        /*console.log('Adding product to cart:', product);
        console.log('Product ID:', product.id); // Check if ID is valid*/

        // Find if the product already exists in the cart
        const existingProduct = currentCart.find(
          (item) => item.product.id === product.id
        );

        let updatedCart;
        if (existingProduct) {
          // If the product exists, increase its quantity
          updatedCart = currentCart.map((item) =>
            item.product.id === product.id
              ? { ...item, quantity: (item.quantity || 1) + 1 }
              : item
          );
        } else {
          // If it doesn't exist, add it with quantity 1
          updatedCart = [...currentCart, { product, quantity: 1 }];
        }

        // Calculate the new total
        const total = updatedCart.reduce(
          (acc, item) => acc + item.product.price * (item.quantity || 1),
          0
        );

        // Update the cart state
        patchState(store, { cart: updatedCart, total: total });
      },

      removeFromCart: (product: Product) => {
        console.log('El ID es: ',product.id)
        const id=product.id;
        const currentCart = store.cart();
        // Actualizamos el carrito, eliminando productos con cantidad 0
        const updatedCart = currentCart.reduce((acc, item) => {

          if (String(item.product.id) == String(product.id)) {
            //console.log('original', item.quantity)
            const newQuantity = item.quantity - 1;
            //console.log('Nueva cantidad: ', newQuantity)
            if (newQuantity > 0) {
              // Si la cantidad es mayor a 0, actualizamos el producto con la nueva cantidad
              acc.push({ ...item, quantity: newQuantity });
              //console.log(' La nueva cantidad es ', newQuantity)
            }
          } else {
            // Mantén los productos que no se están eliminando
            acc.push(item);
          }
          return acc;
        }, [] as CartItem[]);

        // Calculamos el total actualizado
        const total = updatedCart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

        // Actualizamos el estado del carrito con el nuevo array y total
        patchState(store, { cart: updatedCart, total });

        //console.log("Updated cart:", updatedCart);
      },

      // Método para obtener la cantidad total de productos en el carrito
      getTotalQuantity: () => {
        return computed(() => {
          const cantidad = store
            .cart()
            .reduce((total, item) => total + (item.quantity || 0), 0);
          return cantidad;
        });
      },
    };
  })
);
