import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatostrabajoComponent } from './datostrabajo.component';

describe('DatostrabajoComponent', () => {
  let component: DatostrabajoComponent;
  let fixture: ComponentFixture<DatostrabajoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatostrabajoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatostrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
