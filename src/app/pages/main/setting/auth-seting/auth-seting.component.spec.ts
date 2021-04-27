import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthSetingComponent } from './auth-seting.component';

describe('AuthSetingComponent', () => {
  let component: AuthSetingComponent;
  let fixture: ComponentFixture<AuthSetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthSetingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthSetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
