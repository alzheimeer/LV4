import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcVehiculoComponent } from './calc-vehiculo.component';

describe('CalcVehiculoComponent', () => {
  let component: CalcVehiculoComponent;
  let fixture: ComponentFixture<CalcVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcVehiculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
