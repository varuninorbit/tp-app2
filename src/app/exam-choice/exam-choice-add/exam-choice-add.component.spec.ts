import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamChoiceAddComponent } from './exam-choice-add.component';

describe('ExamChoiceAddComponent', () => {
  let component: ExamChoiceAddComponent;
  let fixture: ComponentFixture<ExamChoiceAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamChoiceAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamChoiceAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
