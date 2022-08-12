import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAllPrescriptionComponent } from './add-all-prescription.component';

describe('AddAllPrescriptionComponent', () => {
  let component: AddAllPrescriptionComponent;
  let fixture: ComponentFixture<AddAllPrescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAllPrescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAllPrescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
