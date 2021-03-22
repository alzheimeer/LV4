import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcInvierteComponent } from './calc-invierte.component';

describe('CalcInvierteComponent', () => {
  let component: CalcInvierteComponent;
  let fixture: ComponentFixture<CalcInvierteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcInvierteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcInvierteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
