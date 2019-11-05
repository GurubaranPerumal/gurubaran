import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../Employee';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn:'root'
})
export class EmployeeService {
  constructor(private httpclient: HttpClient) {
  }
  getEmployee(): Observable<Array<Employee>> {
    return this.httpclient.get<Employee[]>("http://localhost:3000/employee");
  }

  addEmployee(emp: Employee): Observable<Employee> {
    return this.httpclient.post<Employee>("http://localhost:3000/employee", emp);
  }
}
