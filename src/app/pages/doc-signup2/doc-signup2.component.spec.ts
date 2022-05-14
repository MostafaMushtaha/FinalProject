import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocSignup2Component } from './doc-signup2.component';

describe('DocSignup2Component', () => {
  let component: DocSignup2Component;
  let fixture: ComponentFixture<DocSignup2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocSignup2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocSignup2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
