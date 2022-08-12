import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAllPrescriptionComponent } from './edit-all-prescription.component';

describe('EditAllPrescriptionComponent', () => {
  let component: EditAllPrescriptionComponent;
  let fixture: ComponentFixture<EditAllPrescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAllPrescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAllPrescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
