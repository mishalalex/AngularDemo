import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css']
})
export class CheckoutFormComponent implements OnInit {

  msg: string = "gmail.com";

  constructor() { }

  ngOnInit(): void {
  }

  submitForm(formData:Object) {
    console.log(formData);
  }

}