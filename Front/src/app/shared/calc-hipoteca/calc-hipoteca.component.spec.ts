import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcHipotecaComponent } from './calc-hipoteca.component';

describe('CalcHipotecaComponent', () => {
  let component: CalcHipotecaComponent;
  let fixture: ComponentFixture<CalcHipotecaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcHipotecaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcHipotecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
