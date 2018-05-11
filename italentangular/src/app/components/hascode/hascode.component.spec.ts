import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HascodeComponent } from './hascode.component';

describe('HascodeComponent', () => {
  let component: HascodeComponent;
  let fixture: ComponentFixture<HascodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HascodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HascodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
