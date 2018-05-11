import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppfoundryComponent } from './appfoundry.component';

describe('AppfoundryComponent', () => {
  let component: AppfoundryComponent;
  let fixture: ComponentFixture<AppfoundryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppfoundryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppfoundryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
