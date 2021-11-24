import { Injectable } from '@angular/core';
import { ProductInterface } from 'src/productInterface';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  productsInCart:ProductInterface[] = [];
  constructor() { }

  addProductsToCart(product:ProductInterface) {
    this.productsInCart.push(product);
  }

  getProducts() {
    return this.productsInCart;
  }

  clearCart() {
    this.productsInCart = [];
  }

}
