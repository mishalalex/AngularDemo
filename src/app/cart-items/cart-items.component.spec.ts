import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartService } from '../cart.service';

import { CartItemsComponent } from './cart-items.component';
import { MockCartService } from './MockedCartService';

describe('CartItemsComponent', () => {
  let component: CartItemsComponent;
  let fixture: ComponentFixture<CartItemsComponent>;
  let cartService: CartService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartItemsComponent ],
      providers: [{provide: CartService, useClass: MockCartService}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartItemsComponent);
    cartService = TestBed.inject(CartService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should calculate the sum of the products without tax properly', () => {
    expect(component).toBeTruthy();
    expect(component.sum).toEqual(90);
  });

  it('should calculate the sum of the products with tax properly', () => {
    expect(component).toBeTruthy();
    expect(component.totalPrice).toEqual(98);
  });

  it('should update the cart total when there is a change in quantity', () => {
    component.updateQuantity(cartService.getProducts()[0].price,3);
    fixture.detectChanges();
    expect(component.sum).toEqual(190);
  });

  it('should display the correct total in the application', () => {
    component.updateQuantity(cartService.getProducts()[0].price,3);
    fixture.detectChanges();
    const element:HTMLElement = fixture.nativeElement;
    expect(element.querySelector(".totalprice")?.textContent).toEqual("$198");
  });

});
