import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { LibraryService } from '../library.service';

import { LibraryPageComponent } from './library-page.component';

describe('LibraryPageComponent', () => {
  let component: LibraryPageComponent;
  let fixture: ComponentFixture<LibraryPageComponent>;
  let getBookDetailsSpy: { calls: { any: () => any; }; };
  let book = [{"book_name":"Moss","isbn":"gr123","genre":"Adventure"},{"book_name":"Jazz","isbn":"gt123","genre":"Fiction"}];

  beforeEach(async () => {
    const mockedLibraryService = jasmine.createSpyObj('LibraryService',['getBookDetails']);
    getBookDetailsSpy = mockedLibraryService.getBookDetails.and.returnValue(of(book));
    await TestBed.configureTestingModule({
      declarations: [ LibraryPageComponent ],
      providers: [{provide:LibraryService, useValue: mockedLibraryService}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryPageComponent);
    TestBed.inject(LibraryService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create 2 rows in the library page with the mocked data', () => {
    expect(component).toBeTruthy();
    const element:HTMLElement = fixture.nativeElement;
    expect(element.querySelectorAll("tr").length).toEqual(3);
  });

  it('should make a call to the getBookDetails function in the LibraryService', () => {
    expect(getBookDetailsSpy.calls.any()).toBe(true);
  });

});
