import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosreferenciacomComponent } from './datosreferenciacom.component';

describe('DatosreferenciacomComponent', () => {
  let component: DatosreferenciacomComponent;
  let fixture: ComponentFixture<DatosreferenciacomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosreferenciacomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosreferenciacomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
