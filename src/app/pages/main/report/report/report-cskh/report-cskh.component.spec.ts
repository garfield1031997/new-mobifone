import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportCskhComponent } from './report-cskh.component';

describe('ReportCskhComponent', () => {
  let component: ReportCskhComponent;
  let fixture: ComponentFixture<ReportCskhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportCskhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportCskhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
