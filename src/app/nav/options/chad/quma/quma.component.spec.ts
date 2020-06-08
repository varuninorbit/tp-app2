import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QumaComponent } from './quma.component';

describe('QumaComponent', () => {
  let component: QumaComponent;
  let fixture: ComponentFixture<QumaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QumaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QumaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
