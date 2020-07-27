import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FindSmthService {

  constructor(private http2Server: HttpClient) {
  }

  FindAllAny(choose): Observable<any[]> {
    return this.http2Server.get<any[]>(`https://jsonplaceholder.typicode.com/${choose}`);
  }
}
