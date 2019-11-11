// import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

// import { LoginComponent } from './login.component';
// import { RouterService } from 'src/app/Services/router.service';
// import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatInputModule, MatAutocompleteModule, MatButtonModule, MatFormFieldModule } from '@angular/material';
// import { Router } from '@angular/router';
// import { HttpClientModule } from '@angular/common/http';
// import { By } from '@angular/platform-browser';


// const testConfig = {
//   error404: {
//     message: 'Http failure response for http://localhost:3000/login: 404 Not Found',
//     name: 'HttpErrorResponse',
//     ok: false,
//     status : 404,
//     statusText: 'Not Found',
//     url: 'http://localhost:3000/login'
//   },
//   error403: {
//     error: {message: 'Unauthorized'},
//     message: 'Http failure response for http://localhost:3000/login/: 403 Forbidden',
//     name: 'HttpErrorResponse',
//     ok: false,
//     status: 403,
//     statusText: 'Forbidden',
//     url: 'http://localhost:3000/login/'
//   },
//   positive: {
//     status: '200',
//     statusText: 'Success'
//   }
// };
// describe('LoginComponent', () => {
//   let component: LoginComponent;
//   let fixture: ComponentFixture<LoginComponent>;
//   let positiveResponse: any;
//   let spyAuthenticateUser: any;
//   let spySetBearerToken: any;
//   let spyRouteToDashboard: any;
//   const routerSpy: any = {};
//   let location: Location;
//   let routerService: any;
//   let errorMessage: any;
//   let debugElement: any;
//   let element: any;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ LoginComponent ],
//       imports: [
//         FormsModule,
//         BrowserAnimationsModule,
//         MatInputModule,
//         MatAutocompleteModule,
//         MatFormFieldModule,
//         MatInputModule,
//         MatButtonModule,
//         HttpClientModule,
//         ReactiveFormsModule
//         ],
//         providers: [
//         RouterService,
//         { provide: Location, useValue: {} },
//         { provide: Router, useValue: routerSpy }
//         ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(LoginComponent);
//     component = fixture.componentInstance;
//     routerService = fixture.debugElement.injector.get(RouterService);
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should handle to login into the system', fakeAsync(() => {
//     positiveResponse = testConfig.positive;
//     spyRouteToDashboard = spyOn(routerService, 'routeToHomepage').and.callFake(() => {});
//     const username = new FormControl('user');
//     component.userId = username;
//     const password = new FormControl('password');
//     component.userPassword = password;
//     component.loginSubmit();
//     expect('login successfully');
//     }));
    
//   it('should handle incorrect login and password', fakeAsync(() => {
//     errorMessage = testConfig.error403;
//     component.submitMessage = ' ';
//     fixture.detectChanges();
//     debugElement = fixture.debugElement.query(By.css('.error-message'));
    
//     const username = new FormControl('user');
//     component.userPassword = username;
//     const password = new FormControl('password');
//     component.userPassword = password;
//     component.loginSubmit();

//     tick();
//     fixture.detectChanges();
//     if (debugElement !== null) {
//       element = debugElement.nativeElement;
//       expect(element.textContent).toBe(errorMessage.error.message,
//         `should store 'err.error.message' in a varibale 'submitMessage' to show error on login page`);
//     } else {
//       expect(false).toBe(true, `Failed to login`);
//     }
//   }));
// });
