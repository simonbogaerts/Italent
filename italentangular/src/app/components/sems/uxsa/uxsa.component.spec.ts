import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UxsaComponent } from './uxsa.component';

describe('UxsaComponent', () => {
  let component: UxsaComponent;
  let fixture: ComponentFixture<UxsaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UxsaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UxsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
