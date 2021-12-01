import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookDetails } from './BookDetails';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  apiUrl: string = "https://48daba30-a2ce-4b8b-bfec-47811769be06.mock.pstmn.io/books?authorname=Metaverse";
  constructor(private http: HttpClient ) { }

  getBookDetails(): Observable<BookDetails[]> {
    return this.http.get<BookDetails[]>(this.apiUrl);
  }
}
