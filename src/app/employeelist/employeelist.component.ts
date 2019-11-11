import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/Services/employee.service';
import { Employee } from 'src/app/Employee';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
  employee:Array<Employee> = [];
  errMessage ='';
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.getEmployee()
    .subscribe(
      notedetails => this.employee=notedetails,
      err => {
        this.errMessage = err.message
      }
      )
  }
  
}
