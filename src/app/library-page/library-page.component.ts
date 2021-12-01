import { Component, OnInit } from '@angular/core';
import { BookDetails } from '../BookDetails';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-library-page',
  templateUrl: './library-page.component.html',
  styleUrls: ['./library-page.component.css']
})
export class LibraryPageComponent implements OnInit {

  bookDetails: BookDetails[];
  constructor(private lib:LibraryService) { }

  ngOnInit(): void {
    this.lib.getBookDetails().subscribe(books=>this.bookDetails = books);
  }

}
