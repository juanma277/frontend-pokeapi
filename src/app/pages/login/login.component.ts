import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  public loader: boolean = false;
  public formLogin: FormGroup;
  public textError: string = '';

  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    this.formLogin = this.formBuilder.group({
      nickname: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required)
    });
   }

   login(){
    if(this.formLogin.invalid){
      return;
    }
    this.loader = true;
    this.userService.login(this.formLogin.value).subscribe({
      next: (res) => console.log(res),
      complete: () => this.loader = false,
      error: (_err: HttpErrorResponse) => this.showError(_err.error.msg)
    })
   }

   showError(error: string){
    this.textError = error;
    this.loader = false;    
  }


}
