import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicDropComponent } from './dynamic-drop.component';

describe('DynamicDropComponent', () => {
  let component: DynamicDropComponent;
  let fixture: ComponentFixture<DynamicDropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicDropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
