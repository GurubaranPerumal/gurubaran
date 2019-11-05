import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../Employee';
import { HttpClient } from '@angular/common/http';
import { user } from 'src/app/login/user';

@Injectable({
  providedIn:'root'
})
export class UserService {
  constructor(private httpclient: HttpClient) {
  }
  
  authenticateUser(user:user){
      if(user.userId == 'guru@gmail.com' && user.userPassword == 'Gurubaran@001') {
        return 'login success fully'
      } else {
        return 'login failed';
      }

  }
}
