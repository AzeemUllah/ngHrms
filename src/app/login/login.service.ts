import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/observable";

@Injectable()
export class LoginService {

  isLogin: boolean = false;
  uid: String = null;

  constructor(private _http: HttpClient) { }

  signin(email: String, password: String): boolean{
    this._http.post<JSON>("http://localhost:3000/api/login",{
      email: email,
      password: password
    }).subscribe(function (data) {
      console.log(data);
      //TODO: Check response, act accordingly in component. Or maybe return whole json by using observable
    },function (error) {
      console.log(error);
    });
    return false;
  }

}
