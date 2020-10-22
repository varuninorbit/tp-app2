import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapcilComponent } from './mcq-chapcil.component';

describe('ChapcilComponent', () => {
  let component: ChapcilComponent;
  let fixture: ComponentFixture<ChapcilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapcilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapcilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
