import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenInformation } from 'src/app/shared/models/token-information.model';
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

  saveToken(token: string){
    if(!localStorage.getItem('token')){
      localStorage.setItem('token', token);
    }
  }

  getToken(): string {
    return localStorage.getItem('token') || '';
  }

  getTokenInformation() {
    let tk = this.getToken();
    tk = tk.split(".")[1];
    const a = atob(tk);
    return JSON.parse(a);
  }

  getUserName(): string {
    const userData: TokenInformation = this.getTokenInformation();
    return userData.name;
  }

  getNickName(): string {
    const userData: TokenInformation = this.getTokenInformation();
    return userData.nickname;
  }

  getLastConnection(): string {
    const userData: TokenInformation = this.getTokenInformation();
    return userData.last_connection;
  }

  getTeam(): string {
    const userData: TokenInformation = this.getTokenInformation();
    return userData.team;
  }

}
