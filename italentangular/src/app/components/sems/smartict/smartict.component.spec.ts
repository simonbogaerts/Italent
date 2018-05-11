import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartictComponent } from './smartict.component';

describe('SmartictComponent', () => {
  let component: SmartictComponent;
  let fixture: ComponentFixture<SmartictComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartictComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
