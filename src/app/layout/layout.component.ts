import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../core/services/user.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  public name: string = '';
  public nickname: string = '';
  public last_connection: string = '';

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.name = this.userService.getUserName();
    this.nickname = this.userService.getNickName();
    this.last_connection = this.userService.getLastConnection();
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }

}
