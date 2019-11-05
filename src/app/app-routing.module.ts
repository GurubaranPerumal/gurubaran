
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from 'src/app/homepage/homepage.component';
import { EmployeeComponent } from 'src/app/employee/employee.component';
import { EmployeelistComponent } from 'src/app/employeelist/employeelist.component';
import { LoginComponent } from 'src/app/login/login.component';
const childRoute: Routes=[
  {
    path:'addEmployee',component:EmployeeComponent
  },
  {
    path:'listEmployee',component:EmployeelistComponent,
  }
];  
const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent
  },
  
  {
    path:'homepage',
    component: HomepageComponent,
    children: childRoute
  },
  
  {
    path: '',
    redirectTo: 'homepage',
    pathMatch: 'full'
  }
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes,{
    onSameUrlNavigation:'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
