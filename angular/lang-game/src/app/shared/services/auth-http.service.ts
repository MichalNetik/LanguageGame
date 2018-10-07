import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthHttpService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.post<{username: string, token: string}>('/login/', {
      username,
      password
    });
  }

  signUp(username: string, password: string) {
    return this.http.post('/signup/', {
      username,
      password
    });
  }
}
