// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { By } from '@angular/platform-browser';
// import { HeaderComponent } from './header.component';

// describe('HeaderComponent', () => {
//   let component: HeaderComponent;
//   let fixture: ComponentFixture<HeaderComponent>;
//   let debugElement: any;
//   let element: any;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ HeaderComponent ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(HeaderComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
//   it('should handle to check header title', () => {
//     debugElement = fixture.debugElement.query(By.css('.mat-toolbar'));
//     if (debugElement) {
//       element = debugElement.nativeElement;
//       expect(element.textContent).toBe('Keep',
//         `should have material toolbar with 'Employee Info' title in header.component.html as <mat-toolbar>Employee Info</mat-toolbar>`);
//     } else {
//       expect(false).toBe(true,
//         `should have an element <mat-toolbar> in your header.component.html to display header title`);
//     }
//   });
// });
