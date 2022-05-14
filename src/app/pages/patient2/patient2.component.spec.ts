import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Patient2Component } from './patient2.component';

describe('Patient2Component', () => {
  let component: Patient2Component;
  let fixture: ComponentFixture<Patient2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Patient2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Patient2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
