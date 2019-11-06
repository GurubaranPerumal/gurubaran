import { Component, NgModule, Type, Injectable } from '@angular/core';
import { ReplaySubject ,  Observable } from 'rxjs';
import { convertToParamMap, ParamMap, Params, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {CommonModule} from '@angular/common';


export class LoginDummyComponent {
}

export class EmployeeDummyComponent {
}

export class HomepageDummyComponent {
}

export class EmployeeListComponent {
}

export class MockRouterService {
  constructor() {  }
}

@NgModule({
  declarations: [],
  entryComponents: [],
  imports: [
  CommonModule,
  FormsModule,
  MatInputModule,
  MatAutocompleteModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  ]
})
export class FakeTestDialogModule {
}

export const routes: Routes = [
{ path: 'login', component: LoginDummyComponent },
{ path: 'homepage', component: HomepageDummyComponent,
children: [
{path: 'homepage/addEmployee', component: EmployeeDummyComponent},
{path: 'homepage/listEmployee', component: EmployeeListComponent},
{path: '', redirectTo: 'login', pathMatch: 'full'},
]}];
