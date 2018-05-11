import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediafoundryComponent } from './mediafoundry.component';

describe('MediafoundryComponent', () => {
  let component: MediafoundryComponent;
  let fixture: ComponentFixture<MediafoundryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediafoundryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediafoundryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
