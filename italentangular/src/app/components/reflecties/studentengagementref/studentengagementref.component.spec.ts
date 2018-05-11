import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentengagementrefComponent } from './studentengagementref.component';

describe('StudentengagementrefComponent', () => {
  let component: StudentengagementrefComponent;
  let fixture: ComponentFixture<StudentengagementrefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentengagementrefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentengagementrefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
