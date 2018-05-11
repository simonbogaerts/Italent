import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternationaliseringComponent } from './internationalisering.component';

describe('InternationaliseringComponent', () => {
  let component: InternationaliseringComponent;
  let fixture: ComponentFixture<InternationaliseringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternationaliseringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternationaliseringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
