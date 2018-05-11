import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CegekaComponent } from './cegeka.component';

describe('CegekaComponent', () => {
  let component: CegekaComponent;
  let fixture: ComponentFixture<CegekaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CegekaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CegekaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
