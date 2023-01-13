import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanEnquiryComponent } from './loan-enquiry.component';

describe('LoanEnquiryComponent', () => {
  let component: LoanEnquiryComponent;
  let fixture: ComponentFixture<LoanEnquiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanEnquiryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanEnquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
