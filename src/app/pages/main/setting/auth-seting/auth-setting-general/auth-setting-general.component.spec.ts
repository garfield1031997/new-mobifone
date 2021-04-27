import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthSettingGeneralComponent } from './auth-setting-general.component';

describe('AuthSettingGeneralComponent', () => {
  let component: AuthSettingGeneralComponent;
  let fixture: ComponentFixture<AuthSettingGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthSettingGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthSettingGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
