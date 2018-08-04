import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardInputFieldComponent } from './standard-input-field.component';

describe('StandardInputFieldComponent', () => {
  let component: StandardInputFieldComponent;
  let fixture: ComponentFixture<StandardInputFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardInputFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardInputFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
