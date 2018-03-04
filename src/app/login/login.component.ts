import { Component, OnInit } from '@angular/core';
import {LoginService} from "./login.service";
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: String = '';
  password: String = '';

  isLogin: boolean = false;
  loginSucessful: boolean = false;



  constructor(private _loginService: LoginService, private _router: Router) {

  }

  ngOnInit() {
    this.isLogin = this._loginService.isLogin;

    if(this.isLogin){
      this._router.navigateByUrl('/dashboard');
    }
  }

  submit(){
    this.loginSucessful = this._loginService.signin(this.email, this.password);
    alert(this.email + " / " + this.password);
  }


}
