import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User, UserInfo } from '../../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = "http://localhost:5004/Account/login";

  constructor(private http: HttpClient) { }

  Login(user: User ): Observable<any>{
    return this.http.post(this.apiUrl, user);
  }
  setToken(token: string): void {
    localStorage.setItem('jwtToken', token);
  }

  getToken(): string | null {
    return localStorage.getItem('jwtToken');
  }

  logout(): void {
    localStorage.removeItem('jwtToken');
  }
  GetUserInfo(): Observable<UserInfo[]> {
    return this.http.get<UserInfo[]>('http://localhost:5004/User/GetAll')

  } 

}
