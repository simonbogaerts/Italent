import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EuricomComponent } from './euricom.component';

describe('EuricomComponent', () => {
  let component: EuricomComponent;
  let fixture: ComponentFixture<EuricomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EuricomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EuricomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
