import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { EmployeeService } from './employee.service';
import { EmployeeComponent } from 'src/app/employee/employee.component';
import { Employee } from 'src/app/Employee';
import { get } from 'selenium-webdriver/http';
import { STATUS_CODES } from 'http';
import { inject } from '@angular/core';

describe('employeeService', () => {
  let service:EmployeeService;
  let httpMock: HttpTestingController;
  beforeEach(() => TestBed.configureTestingModule({
    providers: [EmployeeService],
    imports:[HttpClientTestingModule],
  }));

  beforeEach(() => {
    service=TestBed.get(EmployeeService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
});

  it('expects service to fetch data',() => {
      // mock data for employee
      const empPost : Employee[]=[
            {employeeId: '1', firstName: 'user', lastName: 'user', employeeMobile: '8680946112', emailId:'user@gmail.com', employeePassword:'user', confirmPassword:'user'},
            {employeeId: '2', firstName: 'user1', lastName: 'user1', employeeMobile: '99880946112', emailId:'user1@gmail.com', employeePassword:'user1', confirmPassword:'user1'}
         ]
      // We call the service
      service.getEmployee().subscribe(data => {
        //expect(data.length).toBe(2);
        //expect(data.length).toBeGreaterThanOrEqual(0);
      });
      // We set the expectations for the HttpClient mock
      const req = httpMock.
                  expectOne(req => req.method === 'GET' && req.url === 'http://localhost:3000/employee');
    
      req.flush({data:empPost});
    })

    it('expect service to post data',() => {
      let fakeRespone:any;
      const empPost : Employee =
        {employeeId: '1', firstName: 'user', lastName: 'user', employeeMobile: '8680946112',
         emailId:'user@gmail.com', employeePassword:'user', confirmPassword:'user'};
      
      // service.addEmployee(empPost).subscribe(data=>{
      //   fakeRespone = data;
      // })
      //expect(fakeRespone).toBeDefined();
      const req = httpMock.expectNone(req => req.method === 'POST' && req.url === 'localhost:3000/employee');
    })
});
