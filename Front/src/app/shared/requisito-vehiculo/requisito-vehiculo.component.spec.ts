import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequisitoVehiculoComponent } from './requisito-vehiculo.component';

describe('RequisitoVehiculoComponent', () => {
  let component: RequisitoVehiculoComponent;
  let fixture: ComponentFixture<RequisitoVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequisitoVehiculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequisitoVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
