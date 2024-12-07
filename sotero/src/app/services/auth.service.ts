import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

  register(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register/`, data);
  }

  login(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login/`, data);
  }

  logout(): Observable<any> {
    return this.http.post(`${this.apiUrl}/logout/`, {});
  }
}
