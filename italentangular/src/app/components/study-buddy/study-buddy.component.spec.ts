import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyBuddyComponent } from './study-buddy.component';

describe('StudyBuddyComponent', () => {
  let component: StudyBuddyComponent;
  let fixture: ComponentFixture<StudyBuddyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudyBuddyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyBuddyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
