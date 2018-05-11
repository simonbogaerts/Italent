import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusItComponent } from './bus-it.component';

describe('BusItComponent', () => {
  let component: BusItComponent;
  let fixture: ComponentFixture<BusItComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusItComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
