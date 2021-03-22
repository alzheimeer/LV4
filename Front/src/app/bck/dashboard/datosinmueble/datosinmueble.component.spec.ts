import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosinmuebleComponent } from './datosinmueble.component';

describe('DatosinmuebleComponent', () => {
  let component: DatosinmuebleComponent;
  let fixture: ComponentFixture<DatosinmuebleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosinmuebleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosinmuebleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
