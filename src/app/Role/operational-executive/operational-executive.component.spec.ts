import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationalExecutiveComponent } from './operational-executive.component';

describe('OperationalExecutiveComponent', () => {
  let component: OperationalExecutiveComponent;
  let fixture: ComponentFixture<OperationalExecutiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperationalExecutiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperationalExecutiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
