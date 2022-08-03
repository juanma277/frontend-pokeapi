import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  public apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getTeams() {
    return this.http.get(`${this.apiUrl}teams`);
  }
}
