import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import {of as observableOf, throwError as observableThrowError,  Observable } from 'rxjs';
import { EmployeeComponent } from './employee.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { EmployeeService } from 'src/app/Services/employee.service';

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
      declarations: [ EmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeComponent);
    component = fixture.componentInstance;
    employeeService = fixture.debugElement.injector.get(EmployeeService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handle blank fields', fakeAsync(() => {
    errorMessage = testConfig.addEmployee.errorMessage;
    doneButton = fixture.debugElement.nativeElement.querySelector('button');
    debugElement = fixture.debugElement.query(By.css('.error-message'));
    spyTakeNotes = spyOn(employeeService, 'addEmployee').and.returnValue(observableOf(errorMessage));
    if (doneButton !== null && debugElement !== null) {
      doneButton.click();
      tick();
      fixture.detectChanges();
      element = debugElement.nativeElement;
      expect(element.textContent).toBe(errorMessage,
        `if there is no value in Firstname or tex input fields, assigne error message to errorMessage variable
        as 'Firstname ,lastname,mobile are required fields'`);
    } else {
      expect(false).toBe(true,
        `should have elements button and <label class='error-message'>{{ errMessage }}</label> in your employee.component.html`);
    }
 }));
});
