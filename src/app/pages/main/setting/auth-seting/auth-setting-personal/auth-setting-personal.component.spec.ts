import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthSettingPersonalComponent } from './auth-setting-personal.component';

describe('AuthSettingPersonalComponent', () => {
  let component: AuthSettingPersonalComponent;
  let fixture: ComponentFixture<AuthSettingPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthSettingPersonalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthSettingPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
