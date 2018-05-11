import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternationaliseringrefComponent } from './internationaliseringref.component';

describe('InternationaliseringrefComponent', () => {
  let component: InternationaliseringrefComponent;
  let fixture: ComponentFixture<InternationaliseringrefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternationaliseringrefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternationaliseringrefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
