import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnovatierefComponent } from './innovatieref.component';

describe('InnovatierefComponent', () => {
  let component: InnovatierefComponent;
  let fixture: ComponentFixture<InnovatierefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnovatierefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnovatierefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
