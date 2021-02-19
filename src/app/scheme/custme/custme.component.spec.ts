import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustmeComponent } from './custme.component';

describe('CustmeComponent', () => {
  let component: CustmeComponent;
  let fixture: ComponentFixture<CustmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustmeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
