import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfcomprobanteComponent } from './confcomprobante.component';

describe('ConfcomprobanteComponent', () => {
  let component: ConfcomprobanteComponent;
  let fixture: ComponentFixture<ConfcomprobanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfcomprobanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfcomprobanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
