import { AppComponent } from './../../app.component';
import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(user: any): Observable<any>{
    console.log(user);
    return this.http.post<any>(`${environment.api}/login`, user)
  }
}
