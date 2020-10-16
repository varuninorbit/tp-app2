import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlutiComponent } from './pluti.component';

describe('PlutiComponent', () => {
  let component: PlutiComponent;
  let fixture: ComponentFixture<PlutiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlutiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlutiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
