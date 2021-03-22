import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequisitoHipotecaComponent } from './requisito-hipoteca.component';

describe('RequisitoHipotecaComponent', () => {
  let component: RequisitoHipotecaComponent;
  let fixture: ComponentFixture<RequisitoHipotecaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequisitoHipotecaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequisitoHipotecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
