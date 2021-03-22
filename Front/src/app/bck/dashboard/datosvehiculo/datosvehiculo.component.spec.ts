import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosvehiculoComponent } from './datosvehiculo.component';

describe('DatosvehiculoComponent', () => {
  let component: DatosvehiculoComponent;
  let fixture: ComponentFixture<DatosvehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosvehiculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosvehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
