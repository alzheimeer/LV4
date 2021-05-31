import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickFormsComponent } from './quick-forms.component';

describe('QuickFormsComponent', () => {
  let component: QuickFormsComponent;
  let fixture: ComponentFixture<QuickFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
