import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

let options = {
  headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
};

@Injectable({
  providedIn:AccountService
})
export class AccountService {

  constructor(private _httpClient: HttpClient) { }
  DoLogin(loginFormJson:any)
  {
    let data = "username"+loginFormJson.UserName +"&password="+loginFormJson.Password+"&grant_type=password";
    return this._httpClient.post("http://www.angularclasses.com/token",data,options);
  }
}
