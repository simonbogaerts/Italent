import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfofarmComponent } from './infofarm.component';

describe('InfofarmComponent', () => {
  let component: InfofarmComponent;
  let fixture: ComponentFixture<InfofarmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfofarmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfofarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
