import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YellowgroundsComponent } from './yellowgrounds.component';

describe('YellowgroundsComponent', () => {
  let component: YellowgroundsComponent;
  let fixture: ComponentFixture<YellowgroundsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YellowgroundsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YellowgroundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
