import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChikooComponent } from './chikoo.component';

describe('ChikooComponent', () => {
  let component: ChikooComponent;
  let fixture: ComponentFixture<ChikooComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChikooComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChikooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
