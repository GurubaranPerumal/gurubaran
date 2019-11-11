
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
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
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
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {path: '404', component: LoginComponent},
  {path: '**', redirectTo: '/404'}
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes,{
    onSameUrlNavigation:'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
