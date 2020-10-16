import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaviComponent } from './lavi.component';

describe('LaviComponent', () => {
  let component: LaviComponent;
  let fixture: ComponentFixture<LaviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaviComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
