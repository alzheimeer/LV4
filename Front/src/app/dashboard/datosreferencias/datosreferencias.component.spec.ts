import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosreferenciasComponent } from './datosreferencias.component';

describe('DatosreferenciasComponent', () => {
  let component: DatosreferenciasComponent;
  let fixture: ComponentFixture<DatosreferenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosreferenciasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosreferenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
