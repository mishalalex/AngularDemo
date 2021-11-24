import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from 'src/data/products';
import { ProductInterface } from 'src/productInterface';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-shop',
  templateUrl: './product-shop.component.html',
  styleUrls: ['./product-shop.component.css']
})
export class ProductShopComponent implements OnInit {
  product:any;
  disableThisButton:boolean = false;
  buttonText:string = "add to cart";
  hideAddedToCartBanner: boolean = true;

  constructor(private route: ActivatedRoute, private cart: CartService) {

   }

  ngOnInit(): void {
  // code to retrieve the product details
  // service can be injected into component class by calling it's object in it's constructor: Dependency Injection
  const routeParams = this.route.snapshot.paramMap;
  const id:number = Number(routeParams.get("productId"));
  this.product = products.find(product => product.id === id);

  }

  addToCart() {
    this.disableThisButton = true;
    this.buttonText = "added to cart";
    this.hideAddedToCartBanner = false;
    this.cart.addProductsToCart(this.product);
  }

}
