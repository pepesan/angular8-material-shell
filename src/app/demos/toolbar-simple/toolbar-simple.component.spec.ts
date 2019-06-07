import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarSimpleComponent } from './toolbar-simple.component';

describe('ToolbarSimpleComponent', () => {
  let component: ToolbarSimpleComponent;
  let fixture: ComponentFixture<ToolbarSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
