import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CraftworkzComponent } from './craftworkz.component';

describe('CraftworkzComponent', () => {
  let component: CraftworkzComponent;
  let fixture: ComponentFixture<CraftworkzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CraftworkzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CraftworkzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
