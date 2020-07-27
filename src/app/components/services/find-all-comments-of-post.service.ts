import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FindAllCommentsOfPostService {

  constructor(private httpClient: HttpClient) { }

  findCommentsOfPost(idPost): Observable<any[]>{
    return this.httpClient.get<any[]>(`https://jsonplaceholder.typicode.com/comments?postId=${idPost}`);
  }

}
