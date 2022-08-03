import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from 'src/app/shared/models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  login(user: UserModel) {
    return this.http.post(`${this.apiUrl}auth/login`, {nickname: user.nickname, password: user.password});
  }

  register(user: UserModel) {
    return this.http.post(`${this.apiUrl}users`,{nickname: user.nickname, name: user.name, password: user.password, team: user.team });
  }
}
