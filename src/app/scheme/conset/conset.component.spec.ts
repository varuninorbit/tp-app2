import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsetComponent } from './conset.component';

describe('ConsetComponent', () => {
  let component: ConsetComponent;
  let fixture: ComponentFixture<ConsetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
