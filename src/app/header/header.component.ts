import { Component, OnInit } from '@angular/core';
import { RouterService } from 'src/app/Services/router.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private routerService: RouterService) { }
  
  onEmployeeList(){
    this.routerService.routeToEmployeeDisplay();
  }

  onEmployeeAdd(){
    this.routerService.routeToAddEmployee();
  }

}
