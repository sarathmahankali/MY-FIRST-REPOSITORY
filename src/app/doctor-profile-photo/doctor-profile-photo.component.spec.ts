import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorProfilePhotoComponent } from './doctor-profile-photo.component';

describe('DoctorProfilePhotoComponent', () => {
  let component: DoctorProfilePhotoComponent;
  let fixture: ComponentFixture<DoctorProfilePhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorProfilePhotoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorProfilePhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
