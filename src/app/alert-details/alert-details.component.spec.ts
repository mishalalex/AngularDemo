import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductInterface } from 'src/productInterface';

import { AlertDetailsComponent } from './alert-details.component';

describe('AlertDetailsComponent', () => {
  let component: AlertDetailsComponent;
  let fixture: ComponentFixture<AlertDetailsComponent>;
  let stubbedProduct: ProductInterface = {
    id: 1,
    name: 'Stubbed Product',
    price: 699,
    quantity: 2,
    status: 'in stock',
    description: "NFT collection owned by celebrities",
    imgaddress:"https://nftnewsinsider.com/wp-content/uploads/2021/06/boredape.jpg",
};
let anotherStubbedProduct: ProductInterface = {
  id: 2,
  name: 'Another Stubbed Product',
  price: 1000,
  quantity: 4,
  status: 'in stock',
  description: "NFT collection owned by someone",
  imgaddress:"https://www.islabit.com/wp-content/uploads/2020/12/NFT-DeFi-3-1024x683.jpg",
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
    const element:HTMLElement = fixture.nativeElement;
    const productStatus = element.querySelector("p");
    expect(productStatus?.textContent).toEqual("This NFT is on discount");
  });

  it('should not display products of value higher than $700 as they are on discount', () => {
    // changing the price to over 700
    component.productFromParent.price = 700;
    fixture.detectChanges();
    const element:HTMLElement = fixture.nativeElement;
    const productStatus = element.querySelector("p");
    expect(productStatus?.textContent).not.toEqual("This NFT is on discount");
  });

  it('should state that a given product is sold out if the quantity is zero ', () => {
    component.productFromParent.quantity = 0;
    fixture.detectChanges();
    const element:HTMLElement = fixture.nativeElement;
    const productStatus = element.querySelector("p");
    expect(productStatus?.textContent).toEqual("Sorry, this NFT collection is sold out");
  });

  it('should emit the correct product details when clicked on the "Check availablity" button',()=> {
    component.productFromParent = stubbedProduct;
    fixture.detectChanges();
    let selectedProduct:ProductInterface;
    component.notify.subscribe(productFromParent => selectedProduct = productFromParent);
    component.clickChildMe();
    expect(selectedProduct!).toEqual(stubbedProduct);
    expect(selectedProduct!).not.toEqual(anotherStubbedProduct);
  });
});
