import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { CheckoutFormComponent } from './checkout-form.component';

describe('CheckoutFormComponent', () => {
  let component: CheckoutFormComponent;
  let fixture: ComponentFixture<CheckoutFormComponent>;
  let mockedCheckoutForm = {
    firstName: "Test",
    lastName: "Name",
    email: "thisisatestemail@email.com",
    password: "password123"
  }

  beforeEach(fakeAsync( () => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ CheckoutFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(fakeAsync(() => {
    fixture = TestBed.createComponent(CheckoutFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should unhide the second HTML section upon form submission', () => {
    expect(component).toBeTruthy();
    expect(component.isSubmitted).toBe(false);
    component.submitForm(mockedCheckoutForm);
    fixture.detectChanges();
    expect(component.isSubmitted).toBe(true);
  });

  it('should hide the first HTML section upon form submission', ()=> {
    component.submitForm(mockedCheckoutForm);
    fixture.detectChanges();
    const formHTML = fixture.nativeElement.querySelector(".my-container");
    expect(formHTML.hidden).toEqual(true);
    component.isSubmitted = false;
    fixture.detectChanges();
    expect(formHTML.hidden).toEqual(false);
  });

  it('should be able to enter user inputs into the text boxes', fakeAsync (()=> {
    let email = fixture.nativeElement.querySelector("#inputEmail1");
    email.value = "testemail1@email.com";
    email.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    tick();
    const message = fixture.nativeElement.querySelector("p");
    expect(message.textContent).toMatch("testemail1@email.com")
  }));

});
