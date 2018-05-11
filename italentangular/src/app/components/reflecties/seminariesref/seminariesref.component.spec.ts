import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeminariesrefComponent } from './seminariesref.component';

describe('SeminariesrefComponent', () => {
  let component: SeminariesrefComponent;
  let fixture: ComponentFixture<SeminariesrefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeminariesrefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeminariesrefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
