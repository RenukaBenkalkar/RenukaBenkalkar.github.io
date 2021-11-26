import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';    
import { BookDetails } from './BookDetails';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  //HttpClient is service
  configUrl ="http://216.10.245.166//Library/GetBook.php?AutherName=Shetty1";

  constructor(private http : HttpClient) { }

getBookDetails() :Observable<BookDetails[]>
{
  return this.http.get<BookDetails[]>(this.configUrl);
}



}
