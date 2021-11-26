import { Component, OnInit } from '@angular/core';
import { ProductInterface } from 'src/productInterface';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit {
  
  products = this.cart.getProducts();
  sum: number;
  newPrice: number;
  estimatedTax: number = 8;
  totalPrice: number;
  
  constructor(private cart: CartService) { }

  ngOnInit(): void {
    // logic for calculating sub total at page initialization
    this.updateSum();
  }

  updateSum() {
    this.sum = 0;
    for (let i=0; i<this.products.length; i++) {
      this.sum += this.products[i].price;
    }

    // adding estimated tax for total
    this.totalPrice = this.sum + this.estimatedTax;
  }

  updateQuantity(productPrice:number, quantity:number) {
      //product.price = original price
      //product price * quantity = new price
      // sum - original price = new price
      this.updateSum();
      this.newPrice = productPrice * quantity;
      this.sum = this.sum - productPrice + this.newPrice;
      this.totalPrice = this.sum + this.estimatedTax;
  }

  removeProduct(product:ProductInterface){
    const index = this.products.indexOf(product);
    this.products.splice(index,1);
    this.updateSum();
  }

}
