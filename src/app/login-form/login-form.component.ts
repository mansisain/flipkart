import { Component,OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { AccountService } from '../services1/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  providers:[AccountService]
})
export class LoginFormComponent implements OnInit
{
  constructor(private _as:AccountService,private _rc:Router){}

  loginForm:any;
  message:any;

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      UserName:new FormControl(null,Validators.required),
      Password:new FormControl(),
    
  });

}

login()
 {
  this._as.DoLogin(this.loginForm.value).subscribe((da:any)=>{
    if(da["access_token"]!="")
    {
      localStorage.setItem("FKTOKEN",da["access_token"]);
      // sessionStorage.setItem("FKTOKEN",da["acces_token"]);
      this._rc.navigate(["/student"])
    }
    else{
      this.message = "Either your username or password is wrong";
    }
  },err=>{
    this.message = "Either your username or password is wrong";
  });
 }
}


