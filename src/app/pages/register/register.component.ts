import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/core/services/team.service';
import { UserService } from 'src/app/core/services/user.service';
import { TeamModel } from 'src/app/shared/models/team.model';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public teams: TeamModel[] = [];
  public loader: boolean = true;
  public formRegister: FormGroup;
  public textError: string = '';

  constructor(private _snackBar: MatSnackBar,
              private teamService: TeamService, 
              private formBuilder: FormBuilder, 
              private userService: UserService, 
              private router: Router) {
    this.formRegister = this.formBuilder.group({
      nickname: new FormControl("", Validators.required),
      name: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required),
      team: new FormControl("", Validators.required),
    });
   }

  ngOnInit(): void {
    this.teamService.getTeams().subscribe({
      next: (res: any) => this.teams = res,
      error: (_err: HttpErrorResponse) => this.showError(_err.error.msg),
      complete: () => this.loader = false
    });
  }

  register(){
    if(this.formRegister.invalid){
      return;
    }
    this.loader = true;

    this.userService.register(this.formRegister.value).subscribe({
      next: (_res) => {
        this._snackBar.open('registered user', 'TO ACCEPT', {
          duration: 5000
        });
        this.router.navigateByUrl('/login');
      },
      complete: () => this.loader = false,
      error: (_err: HttpErrorResponse) => this.showError(_err.error.errors[0].msg),
    });
  }

  showError(error: string){
    this.textError = error;
    this.loader = false;    
  }

}
