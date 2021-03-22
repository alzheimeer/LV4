import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcConstruccionComponent } from './calc-construccion.component';

describe('CalcConstruccionComponent', () => {
  let component: CalcConstruccionComponent;
  let fixture: ComponentFixture<CalcConstruccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcConstruccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcConstruccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
