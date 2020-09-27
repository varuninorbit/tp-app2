import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShrimComponent } from './shrim.component';

describe('ShrimComponent', () => {
  let component: ShrimComponent;
  let fixture: ComponentFixture<ShrimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShrimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShrimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
