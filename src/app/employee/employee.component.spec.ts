import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import {of as observableOf, throwError as observableThrowError,  Observable } from 'rxjs';
import { EmployeeComponent } from './employee.component';
import { By, BrowserModule } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { EmployeeService } from 'src/app/Services/employee.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatAutocompleteModule, MatFormFieldModule, MatButtonModule, MatToolbarModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { LoginComponent } from 'src/app/login/login.component';
import { HeaderComponent } from 'src/app/header/header.component';
import { EmployeelistComponent } from 'src/app/employeelist/employeelist.component';
import { HomepageComponent } from 'src/app/homepage/homepage.component';
import { AppComponent } from 'src/app/app.component';

describe('EmployeeComponent', () => {
  let component: EmployeeComponent;
  let fixture: ComponentFixture<EmployeeComponent>;

  let employeeService: EmployeeService
  let spyTakeNotes: any;
  let errorResponse404: any;
  let positiveResponse: any = null;
  let errorMessage: string;
  let debugElement: any;
  let element: any;
  let doneButton: any;
  let inputBox: any;
  let textArea: any;

  const testConfig = {
    addEmployee: {
      positive: {
        employeeId: 3,
        FfrstName: 'user1',
        lastName: 'user',
        employeeMobile: '8980565555'
      },
      errorMessage: 'EmployeeId, FirstName, LastName and Mobile are required fields'
    },
    error404: {
      message: 'Http failure response for http://localhost:3000/employee: 404 Not Found',
      name: 'HttpErrorResponse',
      ok: false,
      status : 404,
      url: 'http://localhost:3000/employee'
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeComponent,
        LoginComponent,
        AppComponent,
        HomepageComponent,
        EmployeeComponent,
        EmployeelistComponent,
        HeaderComponent,
        LoginComponent
     ],
     imports: [
        BrowserModule,
        MatToolbarModule,
        FormsModule,
        MatInputModule,
        BrowserAnimationsModule,
        MatButtonModule,
        HttpClientModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        AppRoutingModule
        ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeComponent);
    component = fixture.debugElement.componentInstance;
    employeeService = fixture.debugElement.injector.get(EmployeeService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h3').value).toContain('Employee Registration Form');
 }));

//   it('should handle blank fields', fakeAsync(() => {
//     errorMessage = testConfig.addEmployee.errorMessage;
//     doneButton = fixture.debugElement.nativeElement.querySelector('button');
//     debugElement = fixture.debugElement.query(By.css('.error-message'));
//     spyTakeNotes = spyOn(employeeService, 'addEmployee').and.returnValue(observableOf(errorMessage));
//     if (doneButton !== null && debugElement !== null) {
//       doneButton.click();
//       tick();
//       fixture.detectChanges();
//       element = debugElement.nativeElement;
//       expect(element.textContent).toBe(errorMessage,
//         `if there is no value in Firstname or tex input fields, assigne error message to errorMessage variable
//         as 'Firstname ,lastname,mobile are required fields'`);
//     } else {
//       expect(false).toBe(true,
//         `should have elements button and <label class='error-message'>{{ errMessage }}</label> in your employee.component.html`);
//     }
//  }));
});
