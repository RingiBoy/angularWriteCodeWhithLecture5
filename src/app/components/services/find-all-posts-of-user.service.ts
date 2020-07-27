import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FindAllPostsOfUserService {

  constructor(private httpServer: HttpClient) {
  }


  showPostofId(id): Observable<any[]> {
    return this.httpServer.get<any[]>(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
  }
}
