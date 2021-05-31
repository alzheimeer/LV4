import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterQuickloanComponent } from './register-quickloan.component';

describe('RegisterQuickloanComponent', () => {
  let component: RegisterQuickloanComponent;
  let fixture: ComponentFixture<RegisterQuickloanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterQuickloanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterQuickloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
