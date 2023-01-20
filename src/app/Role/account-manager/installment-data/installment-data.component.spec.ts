import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallmentDataComponent } from './installment-data.component';

describe('InstallmentDataComponent', () => {
  let component: InstallmentDataComponent;
  let fixture: ComponentFixture<InstallmentDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstallmentDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstallmentDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
