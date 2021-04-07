import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisolicitudComponent } from './misolicitud.component';

describe('MisolicitudComponent', () => {
  let component: MisolicitudComponent;
  let fixture: ComponentFixture<MisolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisolicitudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MisolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
