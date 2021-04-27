import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportPortalComponent } from './report-portal.component';

describe('ReportPortalComponent', () => {
  let component: ReportPortalComponent;
  let fixture: ComponentFixture<ReportPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportPortalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
