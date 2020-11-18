import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepaComponent } from './stepa.component';

describe('StepaComponent', () => {
  let component: StepaComponent;
  let fixture: ComponentFixture<StepaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
