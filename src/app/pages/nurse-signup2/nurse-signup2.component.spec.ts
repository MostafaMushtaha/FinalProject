import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NurseSignup2Component } from './nurse-signup2.component';

describe('NurseSignup2Component', () => {
  let component: NurseSignup2Component;
  let fixture: ComponentFixture<NurseSignup2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NurseSignup2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NurseSignup2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
