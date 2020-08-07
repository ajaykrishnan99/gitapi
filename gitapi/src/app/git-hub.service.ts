import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import { repos } from './repo';
@Injectable({
  providedIn: 'root'
})
export class GitHubService {

  baseURL: string = "https://api.github.com/";
 
  constructor(private http: HttpClient) {
  }
 
  getRepos(userName: string): Observable<any> {
    return this.http.get(this.baseURL + 'users/' + userName + '/repos')
  }
 
}
