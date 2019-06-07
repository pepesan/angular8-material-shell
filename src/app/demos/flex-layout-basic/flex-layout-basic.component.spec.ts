import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexLayoutBasicComponent } from './flex-layout-basic.component';

describe('FlexLayoutBasicComponent', () => {
  let component: FlexLayoutBasicComponent;
  let fixture: ComponentFixture<FlexLayoutBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexLayoutBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexLayoutBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
