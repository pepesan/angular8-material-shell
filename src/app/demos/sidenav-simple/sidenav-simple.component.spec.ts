import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavSimpleComponent } from './sidenav-simple.component';

describe('SidenavSimpleComponent', () => {
  let component: SidenavSimpleComponent;
  let fixture: ComponentFixture<SidenavSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
