import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequisitoQuickloanComponent } from './requisito-quickloan.component';

describe('RequisitoQuickloanComponent', () => {
  let component: RequisitoQuickloanComponent;
  let fixture: ComponentFixture<RequisitoQuickloanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequisitoQuickloanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequisitoQuickloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
