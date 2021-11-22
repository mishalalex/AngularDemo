import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

import {ProductInterface} from 'src/productInterface';


@Component({
  selector: 'app-alert-details',
  templateUrl: './alert-details.component.html',
  styleUrls: ['./alert-details.component.css']
})
export class AlertDetailsComponent implements OnInit {
  @Input() // meaning this is coming from the parent component where this is a child component
  productFromParent!: ProductInterface;
  @Input()
  toggleButton!: boolean;
  @Output() notify = new EventEmitter<ProductInterface>();

  constructor() { }

  ngOnInit(): void {
  }

  clickChildMe() {
    this.notify.emit(this.productFromParent)
  }
}
