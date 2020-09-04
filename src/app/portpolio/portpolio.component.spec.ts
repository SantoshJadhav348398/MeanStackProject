import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortpolioComponent } from './portpolio.component';

describe('PortpolioComponent', () => {
  let component: PortpolioComponent;
  let fixture: ComponentFixture<PortpolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortpolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortpolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
