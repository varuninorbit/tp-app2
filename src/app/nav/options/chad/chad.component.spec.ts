import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChadComponent } from './chad.component';

describe('ChadComponent', () => {
  let component: ChadComponent;
  let fixture: ComponentFixture<ChadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
