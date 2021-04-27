import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalSentComponent } from './portal-sent.component';

describe('PortalSentComponent', () => {
  let component: PortalSentComponent;
  let fixture: ComponentFixture<PortalSentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortalSentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalSentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
