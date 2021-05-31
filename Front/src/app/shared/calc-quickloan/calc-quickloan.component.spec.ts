import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcQuickloanComponent } from './calc-quickloan.component';

describe('CalcQuickloanComponent', () => {
  let component: CalcQuickloanComponent;
  let fixture: ComponentFixture<CalcQuickloanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcQuickloanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcQuickloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
