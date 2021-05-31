import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickloanComponent } from './quickloan.component';

describe('QuickloanComponent', () => {
  let component: QuickloanComponent;
  let fixture: ComponentFixture<QuickloanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickloanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
