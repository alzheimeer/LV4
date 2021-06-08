import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcQuickloan2Component } from './calc-quickloan2.component';

describe('CalcQuickloan2Component', () => {
  let component: CalcQuickloan2Component;
  let fixture: ComponentFixture<CalcQuickloan2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalcQuickloan2Component]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcQuickloan2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
