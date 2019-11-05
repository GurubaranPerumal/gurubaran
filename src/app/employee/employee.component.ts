import { Component, OnInit } from '@angular/core';
import {Employee} from '../Employee';
import { EmployeeService } from 'src/app/Services/employee.service';
import { FormControl,  Validators, ReactiveFormsModule } from '@angular/forms';
import { CustomValidators, ConfirmValidParentMatcher, regExps, errorMessages } from 'src/app/custom-validator';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RouterService } from 'src/app/Services/router.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  

  empList:Array<Employee> = [];
  loginForm: FormGroup;
  errorMessage : string;
  errors = errorMessages;

  employeeId = new FormControl('', Validators.compose([Validators.required]));
  employeeMobile = new FormControl('', Validators.compose([Validators.required, Validators.minLength(10)]));
  employeePassword = new FormControl('', Validators.compose([Validators.required, Validators.pattern(regExps.password)]));
  confirmPassword = new FormControl('',Validators.compose([Validators.required,CustomValidators.childrenEqual] ))
  firstName = new FormControl('', Validators.compose([Validators.required, Validators.minLength(4)]));
  lastName = new FormControl('', Validators.compose([Validators.required, Validators.minLength(4)]));
  submitMessage: string;

  constructor(private routerservice: RouterService, private employeeservice: EmployeeService,
    private formBuilder: FormBuilder) {
   
   }
  
  ngOnInit() {
    
    this.loginForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(5)]],
      lastName: ['', [Validators.required, Validators.minLength(5)]],
      userRole: ['', Validators.required], 
      userId : ['',[Validators.required,Validators.email]],
      passwordGroup: this.formBuilder.group({
        userPassword: ['', [
              Validators.required,
              Validators.pattern(regExps.userPassword)
          ]],
          confirmPassword: ['', Validators.required]
      }, { validator: CustomValidators.childrenEqual})        
  });
  }
 
  addEmployee() {
    const employee:any ={
      employeeId: this.employeeId.value,
      employeeMobile: this.employeeMobile.value,
      employeePassword: this.employeePassword.value,
      firstName: this.firstName.value,
      lastName: this.lastName.value
    };
    this.employeeservice.addEmployee(
     employee).subscribe(
      data => {
        this.empList.push(data)
        this.errorMessage ='User Registered!...'
      },
      err => {
        if (err.status === 403) {
          this.submitMessage = err.error.message;
        }
        else {
          this.submitMessage = err.message;
        }
      }
    )
  }

}
