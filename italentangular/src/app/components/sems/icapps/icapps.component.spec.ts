import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IcappsComponent } from './icapps.component';

describe('IcappsComponent', () => {
  let component: IcappsComponent;
  let fixture: ComponentFixture<IcappsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcappsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IcappsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
