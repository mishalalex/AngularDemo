import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductInterface } from 'src/productInterface';

import { AlertDetailsComponent } from './alert-details.component';

describe('AlertDetailsComponent', () => {
  let component: AlertDetailsComponent;
  let fixture: ComponentFixture<AlertDetailsComponent>;
  let stubbedProduct: ProductInterface = {
    id: 1,
    name: 'Stubbed Product',
    price: 399,
    quantity: 2,
    status: 'in stock',
    description: "NFT collection owned by celebrities",
    imgaddress:"https://nftnewsinsider.com/wp-content/uploads/2021/06/boredape.jpg",
};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertDetailsComponent);
    component = fixture.componentInstance;
    // replace the productFromParent with our stubbed product
    component.productFromParent = stubbedProduct;
    fixture.detectChanges();
  });

  it('should display products of value less than $700 as they are on discount', () => {
    expect(component).toBeTruthy();
    const element: HTMLElement = fixture.nativeElement;
    const p = element.querySelector("p");
    expect(p?.textContent).toEqual("This NFT is on discount ")
  });

  it('should not display products of value higher than $700 as they are on discount', () => {
    stubbedProduct.price = 701;
    component.productFromParent = stubbedProduct;
    fixture.detectChanges();
    expect(component).toBeTruthy();
    const element: HTMLElement = fixture.nativeElement;
    const p = element.querySelector("p");
    expect(p?.textContent).not.toEqual("This NFT is on discount ");
  });

  it('should state that a given product is sold out if the quantity is zero ', () => {
    stubbedProduct.quantity = 0;
    component.productFromParent = stubbedProduct;
    fixture.detectChanges();
    expect(component).toBeTruthy();
    const element: HTMLElement = fixture.nativeElement;
    const p = element.querySelector("p");
    expect(p?.textContent).toEqual("Sorry, this NFT collection is sold out")
  });
});
