import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequisitoPersonalComponent } from './requisito-personal.component';

describe('RequisitoPersonalComponent', () => {
  let component: RequisitoPersonalComponent;
  let fixture: ComponentFixture<RequisitoPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequisitoPersonalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequisitoPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
