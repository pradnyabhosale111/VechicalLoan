import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleappliactionComponent } from './singleappliaction.component';

describe('SingleappliactionComponent', () => {
  let component: SingleappliactionComponent;
  let fixture: ComponentFixture<SingleappliactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleappliactionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleappliactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
