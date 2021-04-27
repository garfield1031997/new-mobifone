import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportCtkvComponent } from './report-ctkv.component';

describe('ReportCtkvComponent', () => {
  let component: ReportCtkvComponent;
  let fixture: ComponentFixture<ReportCtkvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportCtkvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportCtkvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
