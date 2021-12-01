import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsComponent } from './product-details.component';

describe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should verify the title of the product details component', ()=> {
    const element:HTMLElement = fixture.nativeElement;
    const pageTitle = element.querySelector("h1");
    expect(pageTitle?.textContent).toBe(component.title)
  });

  it('should be able to toggle the toggleButton ', () => {
    expect(component).toBeTruthy();
    expect(component.toggleButton).toBe(true);
    component.enableBuying();
    expect(component.toggleButton).toBe(false);
  });

});
