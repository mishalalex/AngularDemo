import { Component, OnInit } from '@angular/core';
import { products } from 'src/data/products';
import { ProductInterface } from 'src/productInterface';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  title: string = "Mishal's Demo NFT Market on Angular";
  products: ProductInterface[] = products;
  toggleButton: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }
  clickMe(product: ProductInterface) {
    window.alert(`${product.name} NFT is available on NFT market`);
  }
  enableBuying() {
    this.toggleButton = !this.toggleButton;
  }

}
