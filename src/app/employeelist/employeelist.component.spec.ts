import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeelistComponent } from './employeelist.component';

describe('EmployeelistComponent', () => {
  let component: EmployeelistComponent;
  let fixture: ComponentFixture<EmployeelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  let employeelist;
  let componentFunction;
  it('check the employee list', ()=>{
      employeelist = null;
      employeelist = componentFunction.getEmployee();
      expect(employeelist.length).toBeGreaterThan(0);
      expect(employeelist.length).toBe(1);
  })
});
