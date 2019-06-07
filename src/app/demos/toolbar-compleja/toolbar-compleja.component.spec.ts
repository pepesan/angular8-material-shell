import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarComplejaComponent } from './toolbar-compleja.component';

describe('ToolbarComplejaComponent', () => {
  let component: ToolbarComplejaComponent;
  let fixture: ComponentFixture<ToolbarComplejaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarComplejaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarComplejaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
