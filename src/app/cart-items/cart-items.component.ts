import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit {
  
  products = this.cart.getProducts();
  
  constructor(private cart: CartService) { }

  ngOnInit(): void {
  }

}
