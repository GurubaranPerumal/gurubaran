import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class RouterService {
  
  constructor(private router:Router, private location: Location) { }

  routeToAddEmployee() {
    this.router.navigate(['homepage/addEmployee']);
  }

  routeToLogin() {
    this.router.navigate(['login']);
  }

  routeToEmployeeDisplay(){
    this.router.navigate(['homepage/listEmployee']);
  }

  routeToHomepage(){
    this.router.navigate(['homepage']);
  }

  
}
