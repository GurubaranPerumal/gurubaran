import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { EmployeeService } from './employee.service';
import { EmployeeComponent } from 'src/app/employee/employee.component';
import { Employee } from 'src/app/Employee';

describe('AddService', () => {
  let service:EmployeeService;
  beforeEach(() => TestBed.configureTestingModule({
    providers: [EmployeeService],
    imports:[HttpClientTestingModule]
  }));

  service=TestBed.get(EmployeeService);

  // it('should retrive get from api',()=>{
  //   const empPost : Employee[]=[
  //     {employeeId: 1, firstName: 'user', lastName: 'user', employeeMobile: 8680946112},
  //     {employeeId: 2, firstName: 'user1', lastName: 'user1', employeeMobile: 99880946112}
  //   ]
  //   service.getEmployee().subscribe(post=>{
  //     expect(post.length).toBeGreaterThanOrEqual(0);
  //   })
  // })
});
