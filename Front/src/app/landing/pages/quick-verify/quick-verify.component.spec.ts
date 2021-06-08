import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickVerifyComponent } from './quick-verify.component';

describe('QuickVerifyComponent', () => {
  let component: QuickVerifyComponent;
  let fixture: ComponentFixture<QuickVerifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickVerifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
