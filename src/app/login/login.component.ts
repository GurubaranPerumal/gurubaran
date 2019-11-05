import { Component, OnInit } from '@angular/core';
import { user } from './user';
import { FormGroup, FormControl, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { RouterService } from 'src/app/Services/router.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  userObj: user;
    loginForm: FormGroup;
    bearerToken: string;
    submitMessage: string;

    userId = new FormControl();
    userPassword = new FormControl();

    constructor(private formbuilder: FormBuilder, private userService:UserService,
       private routerservice: RouterService) {
      this.userObj = new user();
  
      this.loginForm = formbuilder.group({
        userId: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
        userPassword: ['', Validators.compose([Validators.required, Validators.minLength(3)])]
      })
    }
  
    loginSubmit() {
       this.userObj = this.loginForm.value;
      if(this.userObj.userId == '' && this.userObj.userPassword == ''){
        this.submitMessage = "User Name and Password Required!";
      } else {
        if(this.userObj.userId == 'guru@gmail.com' && 
        this.userObj.userPassword == 'Gurubaran@001') {
          this.routerservice.routeToHomepage();
          this.submitMessage= 'login success fully'
        } else {
          this.submitMessage= 'login failed';
        }
      }
    }

}
