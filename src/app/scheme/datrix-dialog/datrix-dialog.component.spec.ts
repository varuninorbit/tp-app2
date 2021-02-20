import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatrixDialogComponent } from './datrix-dialog.component';

describe('DatrixDialogComponent', () => {
  let component: DatrixDialogComponent;
  let fixture: ComponentFixture<DatrixDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatrixDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatrixDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
