import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AlertDetailsComponent } from './alert-details/alert-details.component';
import { ProductShopComponent } from './product-shop/product-shop.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { CheckoutFormComponent } from './checkout-form/checkout-form.component';
import { FormsModule } from '@angular/forms';
import { LibraryPageComponent } from './library-page/library-page.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductDetailsComponent,
    AlertDetailsComponent,
    ProductShopComponent,
    LandingPageComponent,
    CartItemsComponent,
    CheckoutFormComponent,
    LibraryPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
