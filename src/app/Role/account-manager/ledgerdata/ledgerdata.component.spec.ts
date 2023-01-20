import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LedgerdataComponent } from './ledgerdata.component';

describe('LedgerdataComponent', () => {
  let component: LedgerdataComponent;
  let fixture: ComponentFixture<LedgerdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LedgerdataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LedgerdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
