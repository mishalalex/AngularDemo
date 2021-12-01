import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { Contact } from '../contacts';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css']
})
export class CheckoutFormComponent implements OnInit {

  msg: string = "gmail.com";
  isSubmitted:boolean = false;
  
  contact = new Contact();
  
  constructor() { }

  ngOnInit(): void {
  }

  submitForm(formData:any) {
    this.contact.firstName = formData.firstName;
    this.contact.lastName = formData.lastName;
    this.contact.email = formData.email;
    if (this.contact.firstName != "" && this.contact.lastName != "" && this.contact.email !="") {
      window.alert(this.contact.firstName + ", congratulations - your check out details are successfully submitted");
      this.isSubmitted = true;
    } else {
      window.alert("Please enter your details before submitting the checkout form")
    }
    console.log(formData);
  }

}
