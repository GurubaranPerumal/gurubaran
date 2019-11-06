import { async, ComponentFixture, TestBed, fakeAsync, tick, tick, tick } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { RouterService } from 'src/app/Services/router.service';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from 'selenium-webdriver';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatAutocompleteModule, MatButtonModule, MatFormFieldModule } from '@angular/material';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const testConfig = {
  error404: {
    message: 'Http failure response for http://localhost:3000/auth/v1: 404 Not Found',
    name: 'HttpErrorResponse',
    ok: false,
    status : 404,
    statusText: 'Not Found',
    url: 'http://localhost:3000/employee'
  },
  error403: {
    error: {message: 'Unauthorized'},
    message: 'Http failure response for http://localhost:3000/employee/: 403 Forbidden',
    name: 'HttpErrorResponse',
    ok: false,
    status: 403,
    statusText: 'Forbidden',
    url: 'http://localhost:3000/employee/'
  }
};
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let positiveResponse: any;
  let spyAuthenticateUser: any;
  let spySetBearerToken: any;
  let spyRouteToDashboard: any;
  const routerSpy: any = {};
  let location: Location;
  let routerService: any;
  let errorMessage: any;
  let debugElement: any;
  let element: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        FormsModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        HttpClientModule,
        ReactiveFormsModule
        ],
        providers: [
        RouterService,
        { provide: Location, useValue: {} },
        { provide: Router, useValue: routerSpy }
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handle to login into the system', fakeAsync(() => {
    positiveResponse = testConfig.positive;
    spyRouteToDashboard = spyOn(RouterService, 'routeToHomepage').and.callFake(() => {});
    const username = new FormControl('stranger');
    component.username = username;
    const password = new FormControl('password');
    component.password = password;
    component.loginSubmit();
    expect('login successfully');
    }));
    
  it('should handle incorrect login and password', fakeAsync(() => {
    errorMessage = testConfig.error403;
    component.submitMessage = ' ';
    fixture.detectChanges();
    debugElement = fixture.debugElement.query(By.css('.error-message'));
    
    const username = new FormControl('stranger');
    component.username = username;
    const password = new FormControl('password');
    component.password = password;
    component.loginSubmit();

    tick();
    fixture.detectChanges();
    if (debugElement !== null) {
      element = debugElement.nativeElement;
      expect(element.textContent).toBe(errorMessage.error.message,
        `should store 'err.error.message' in a varibale 'submitMessage' to show error on login page`);
    } else {
      expect(false).toBe(true,
        `Failed to login`);
    }
  
  }));
});
