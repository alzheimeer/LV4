import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosconstruccionComponent } from './datosconstruccion.component';

describe('DatosconstruccionComponent', () => {
  let component: DatosconstruccionComponent;
  let fixture: ComponentFixture<DatosconstruccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosconstruccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosconstruccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
