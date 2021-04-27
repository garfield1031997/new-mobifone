import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportVncertComponent } from './report-vncert.component';

describe('ReportVncertComponent', () => {
  let component: ReportVncertComponent;
  let fixture: ComponentFixture<ReportVncertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportVncertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportVncertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
