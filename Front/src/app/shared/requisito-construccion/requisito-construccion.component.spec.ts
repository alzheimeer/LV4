import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequisitoConstruccionComponent } from './requisito-construccion.component';

describe('RequisitoConstruccionComponent', () => {
  let component: RequisitoConstruccionComponent;
  let fixture: ComponentFixture<RequisitoConstruccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequisitoConstruccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequisitoConstruccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
