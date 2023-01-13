import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefautcomponentComponent } from './defautcomponent.component';

describe('DefautcomponentComponent', () => {
  let component: DefautcomponentComponent;
  let fixture: ComponentFixture<DefautcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefautcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefautcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
